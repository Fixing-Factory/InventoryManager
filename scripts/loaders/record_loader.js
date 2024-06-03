import { ItemDetailsManager } from "../dynamic_content/item_details_manager.js"
import { LoggingDetailsManager } from "../dynamic_content/logging_details_manager.js"
import { WarningMessageManager } from "../dynamic_content/warning_message_manager.js"
import { SpreadsheetRecordFetcher } from "../fetchers/spreadsheet_record_fetcher.js"

export class RecordLoader {
  constructor() {
    this.loggingDetailsManager = new LoggingDetailsManager()
    this.recordFetcher = new SpreadsheetRecordFetcher()
    this.warningMessageManager = new WarningMessageManager()
    this.itemDetailsManager = new ItemDetailsManager()
  }

  async loadRecordData() {
    const params = new URLSearchParams(location.search.substring(1))
    const recordId = params.get("record-id")

    if (recordId) {
      const recordRow = await this.recordFetcher.loadRecordRow(recordId)

      if (recordRow) {
        this.loggingDetailsManager.populateDetails(recordRow)
        this.itemDetailsManager.display()
      } else {
        this.warningMessageManager.displayMessage(`Record with id ${recordId} could not be found!`)
      }
    }
  }
}