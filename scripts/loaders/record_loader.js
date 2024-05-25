import { TestFileFetcher } from "../fetchers/test_file_fetcher.js"

export class RecordLoader {
  constructor() {
    this.idInput = document.getElementById('item-id')
    this.brandName = document.getElementById('brand-name')
    this.itemType = document.getElementById('item-type')
    this.recordFetcher = new TestFileFetcher()
  }

  async loadRecordData() {
    const itemRecord = await this.recordFetcher.loadData()

    this.idInput.textContent = itemRecord.id
    this.brandName.textContent = itemRecord.brand_name
    this.itemType.textContent = itemRecord.item_type
  }
}