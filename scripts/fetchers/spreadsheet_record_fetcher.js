export class spreadsheetRecordFetcher {
  constructor(accessToken) {
    this.accessToken = accessToken
    this.spreadsheetid = "1uSLeihD6gNyESoiADu6-P7Pnx3CW-3071OEZRR8dvc4"
    this.sheetName = "CURRENT Regis Road Logging"
    this.apiBaseUrl = "https://sheets.googleapis.com/v4/"
    this.idColumnNumber = 2
  }

  async loadRecord(recordId) {
    const request = new Request(this.buildSheetUrl())

    request.headers = {
      "Authorization": `Bearer ${this.accessToken}`
    }

    const response = await fetch(request)
    const responseJson = await response.json()

    const rows = responseJson.values

    return this.findRecordbyId(recordId, rows)
  }

  findRecordbyId(recordId, rows) {

  }

  buildRecordFromRow(row) {
    
  }

  buildSheetUrl() {
    return `${this.apiBaseUrl}/spreadsheets/${this.spreadsheetid}/values/${this.sheetName}`
  }
}