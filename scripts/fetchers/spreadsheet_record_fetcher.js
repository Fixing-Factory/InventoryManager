import { GoogleAuthenticationClient } from "../auth/google_authentication_client.js"

export class SpreadsheetRecordFetcher {
  constructor() {
    this.googleAuthclient = new GoogleAuthenticationClient()
    this.spreadsheetid = "1uSLeihD6gNyESoiADu6-P7Pnx3CW-3071OEZRR8dvc4"
    this.sheetName = "CURRENT Regis Road Logging"
    this.apiBaseUrl = "https://sheets.googleapis.com/v4"
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
    const filteredRows = rows.filter((row) => row[this.idColumnNumber - 1] === recordId);

    if (filteredRows.length != 0) {
      const targetRow = filteredRows[0]

      return targetRow
    }
  }

  buildSheetUrl() {
    return `${this.apiBaseUrl}/spreadsheets/${this.spreadsheetid}/values/${this.sheetName}`
  }
}