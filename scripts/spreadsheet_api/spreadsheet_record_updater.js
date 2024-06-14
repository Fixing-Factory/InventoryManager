import { GoogleAuthenticationClient } from "../auth/google_authentication_client.js"
import { LoggingDetails } from "../data/loggingDetails.js"

export class SpreadsheetRecordUpdater {
  constructor() {
    this.googleAuthclient = new GoogleAuthenticationClient()
    this.spreadsheetid = "1uSLeihD6gNyESoiADu6-P7Pnx3CW-3071OEZRR8dvc4"
    this.sheetName = "CURRENT Regis Road Logging"
    this.apiBaseUrl = "https://sheets.googleapis.com/v4"
  }

  async testUpdate(){
    const loggingDetails = new LoggingDetails(123, "Jonesey's", "Train Controller", "Z-1001", "1000000")

    await this.updateRecordLoggingDetails(loggingDetails, 104)
  }

  async updateRecordLoggingDetails(loggingDetails, rowNumber) {
    const params = {
      "valueInputOption": "USER_ENTERED",
    }
    const queryParams = new URLSearchParams(params)
    const request = new Request(this.buildSheetUrl(rowNumber, 2, 6, queryParams))
    const accessToken = await this.googleAuthclient.fetchToken()

    await fetch(request, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        "values": [
          [
            loggingDetails.id,
            loggingDetails.brandName,
            loggingDetails.itemType,
            loggingDetails.modelNumber,
            loggingDetails.weight
          ]
        ]
      })
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response); 
    }).catch((reason) => { 
      this.handleResponseError(reason)
    })
  }

  buildSheetUrl(row, fromColumn, toColumn, urlSearchParams) {
    const spreadsheetRange = `${this.sheetName}!R${row}C${fromColumn}:R${row}C${toColumn}`
    return `${this.apiBaseUrl}/spreadsheets/${this.spreadsheetid}/values/${spreadsheetRange}?${urlSearchParams.toString()}`
  }

  handleResponseError(reason) {
    console.log(`
    Spreadsheet Update Request Failed: ${reason}. 
    Requesting new access token...
    `); 
    localStorage.clear("google-access-token")
    this.googleAuthclient.requestGoogleAuthentication() 
  }
}
