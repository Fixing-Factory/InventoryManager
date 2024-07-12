import { GoogleAuthenticationClient } from "../auth/google_authentication_client.js"
import { AdvisoryInfoDialogManager } from "../dynamic_content/advisory_dialog_manager.js"
import { WarningMessageManager } from "../dynamic_content/warning_message_manager.js"
import { SPREADSHEETCONFIG } from "./spreadsheet_properties.js"

export class SpreadsheetRecordUpdater {
  constructor() {
    this.googleAuthclient = new GoogleAuthenticationClient()
    this.advisoryDialogManager = new AdvisoryInfoDialogManager()
    this.spreadsheetid = SPREADSHEETCONFIG.spreadsheetId
    this.apiBaseUrl = SPREADSHEETCONFIG.apiBaseUrl
    this.warningMessageManager = new WarningMessageManager()
  }
  
  async updateRecordLoggingDetails(loggingDetails, rowNumber, sheetName) {
    const values = [
      loggingDetails.timestamp,
      loggingDetails.id,
      loggingDetails.brandName,
      loggingDetails.itemType,
      loggingDetails.modelNumber,
      loggingDetails.weight
    ]
    await this.updateDetails(sheetName, rowNumber, values, 1, 6)
  }
  
    async updateRecordTestingDetails(tesingDetails, rowNumber, sheetName) {
      if (sheetName == SPREADSHEETCONFIG.regisRoadSheetName) {
        const values = [
          tesingDetails.testingStatus,
          tesingDetails.testingNotes,
          tesingDetails.patStatusBefore
        ]
        await this.updateDetails(sheetName, rowNumber, values, 7, 9)
      } else if (sheetName == SPREADSHEETCONFIG.donationSheetName) {
        let values = [
          tesingDetails.testingStatus,
          tesingDetails.testingNotes,
        ]
        await this.updateDetails(sheetName, rowNumber, values, 7, 8)
        values = [
          tesingDetails.patStatusBefore
        ]
        await this.updateDetails(sheetName, rowNumber, values, 10, 10)
      }
    }
  
  async updateRecordFixingDetails(fixingDetails, rowNumber, sheetName) {
    if (sheetName == SPREADSHEETCONFIG.regisRoadSheetName) {
      const values = 
      [
        fixingDetails.patStatusAfterFix,
        fixingDetails.fixerName
      ]
      await this.updateDetails(sheetName, rowNumber, values, 10, 11)
    } else if (sheetName == SPREADSHEETCONFIG.donationSheetName) {
      let values =           [
        fixingDetails.patStatusAfterFix
      ]
      await this.updateDetails(sheetName, rowNumber, values, 11, 11)

      values =           [
        fixingDetails.fixerName
      ]
      await this.updateDetails(sheetName, rowNumber, values, 16, 16)
    }
  }

  async updateDetails(sheetName, rowNumber, values, rangeStart, rangeEnd) {
    const params = {
      "valueInputOption": "USER_ENTERED",
    }
    const queryParams = new URLSearchParams(params)
    const request = new Request(this.buildSheetUrl(sheetName, rowNumber, rangeStart, rangeEnd, queryParams))
    const accessToken = await this.googleAuthclient.fetchToken()

    await fetch(request, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      },
      body: JSON.stringify({
        "values": [
          values
        ]
      })
    }).then((response) => {
      if (response.ok) {
        this.advisoryDialogManager.displayTemporarySuccessMessage("Details Updated!")
        return response.json();
      }
      return Promise.reject(response);
    }).catch(async reason => {
      const responseText = await reason.text()
      this.handleResponseError(responseText)
    })
  }

  buildSheetUrl(sheetName, row, fromColumn, toColumn, urlSearchParams) {
    const spreadsheetRange = `${sheetName}!R${row}C${fromColumn}:R${row}C${toColumn}`
    return `${this.apiBaseUrl}/spreadsheets/${this.spreadsheetid}/values/${spreadsheetRange}?${urlSearchParams.toString()}`
  }

  handleResponseError(text) {
    this.warningMessageManager.displayMessage(`
    Spreadsheet Update Request Failed: ${text}. 
    Requesting new access token...
    `)
    setTimeout(() => this.requestReauth(), 8000)
  }

  requestReauth() {
    localStorage.clear("google-access-token")
    this.googleAuthclient.requestGoogleAuthentication()
  }
}
