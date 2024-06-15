import { GoogleAuthenticationClient } from "../auth/google_authentication_client.js"
import { SPREADSHEETCONFIG } from "./spreadsheet_properties.js"

export class SpreadsheetRecordFetcher {
  constructor() {
    this.googleAuthclient = new GoogleAuthenticationClient()
    this.spreadsheetid = SPREADSHEETCONFIG.spreadsheetId
    this.sheetName = SPREADSHEETCONFIG.sheetName
    this.apiBaseUrl = SPREADSHEETCONFIG.apiBaseUrl
    this.idColumnNumber = 2
  }

  async loadRecordRow(recordId) {
    const request = new Request(this.buildSheetUrl())
    const accessToken = await this.googleAuthclient.fetchToken()

    request.headers.set("Authorization", `Bearer ${accessToken}`)

    const response = await fetch(request).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response); 
    }).catch((reason) => { 
      console.log(`
      Spreadsheet Read Request Failed: ${reason}. 
      Requesting new access token...
      `); 
      localStorage.clear("google-access-token")
      this.googleAuthclient.requestGoogleAuthentication() 
    })

    const rows = response.values

    return this.findRecordbyId(recordId, rows)
  }

  findRecordbyId(recordId, rows) {
    const targetRowIndex = rows.findIndex((row) => row[this.idColumnNumber - 1] === recordId);

    if (targetRowIndex !== -1) {
      const targetRow = rows[targetRowIndex]

      return [targetRow, targetRowIndex]
    } 
  }

  buildSheetUrl() {
    return `${this.apiBaseUrl}/spreadsheets/${this.spreadsheetid}/values/${this.sheetName}`
  }
}