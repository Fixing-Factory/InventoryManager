import { GoogleAuthenticationClient } from "../auth/google_authentication_client.js"
import { AdvisoryInfoDialogManager } from "../dynamic_content/advisory_dialog_manager.js"

export class SpreadsheetRecordUpdater {
  constructor() {
    this.googleAuthclient = new GoogleAuthenticationClient()
    this.advisoryDialogManager = new AdvisoryInfoDialogManager()
    this.spreadsheetid = "1uSLeihD6gNyESoiADu6-P7Pnx3CW-3071OEZRR8dvc4"
    this.sheetName = "CURRENT Regis Road Logging"
    this.apiBaseUrl = "https://sheets.googleapis.com/v4"
  }

  async updateRecordTestingDetails(tesingDetails, rowNumber) {
    const params = {
      "valueInputOption": "USER_ENTERED",
    }
    const queryParams = new URLSearchParams(params)
    const request = new Request(this.buildSheetUrl(rowNumber, 7, 9, queryParams))
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
            tesingDetails.testingStatus,
            tesingDetails.testingNotes,
            tesingDetails.patStatusBefore
          ]
        ]
      })
    }).then((response) => {
      if (response.ok) {
        this.advisoryDialogManager.displayTemporarySuccessMessage("Testing Details Updated!")
        return response.json();
      }
      return Promise.reject(response); 
    }).catch((reason) => { 
      this.handleResponseError(reason)
    })
  }

  async updateRecordLoggingDetails(loggingDetails, rowNumber) {
    const params = {
      "valueInputOption": "USER_ENTERED",
    }
    const queryParams = new URLSearchParams(params)
    const request = new Request(this.buildSheetUrl(rowNumber, 1, 6, queryParams))
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
            loggingDetails.timestamp,
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
        this.advisoryDialogManager.displayTemporarySuccessMessage("Logging Details Updated!")
        return response.json();
      }
      return Promise.reject(response); 
    }).catch((reason) => { 
      this.handleResponseError(reason)
    })
  }

  async updateRecordFixingDetails(fixingDetails, rowNumber) {
    const params = {
      "valueInputOption": "USER_ENTERED",
    }
    const queryParams = new URLSearchParams(params)
    const request = new Request(this.buildSheetUrl(rowNumber, 10, 14, queryParams))
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
            fixingDetails.patStatusAfterFix,
            fixingDetails.fixerName,
            fixingDetails.fixerNotes,
            fixingDetails.diagnosis,
            fixingDetails.partsNeeded
          ]
        ]
      })
    }).then((response) => {
      if (response.ok) {
        this.advisoryDialogManager.displayTemporarySuccessMessage("Fixing Details Updated!")
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
