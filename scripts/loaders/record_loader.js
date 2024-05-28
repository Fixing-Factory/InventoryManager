import { SpreadsheetRecordFetcher } from "../fetchers/spreadsheet_record_fetcher.js"

export class RecordLoader {
  constructor() {
    this.idInput = document.getElementById('item-id')
    this.brandName = document.getElementById('brand-name')
    this.itemType = document.getElementById('item-type')
    this.recordFetcher = new SpreadsheetRecordFetcher()
  }

  async loadRecordData() {
    const params = new URLSearchParams(location.search.substring(1))
    const recordId = params.get("record-id")

    const itemRecord = await this.recordFetcher.loadRecord(recordId)

    this.idInput.textContent = itemRecord.id
    this.brandName.textContent = itemRecord.brandName
    this.itemType.textContent = itemRecord.itemType
  }
}