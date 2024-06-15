import { FixingDetailsManager } from "../dynamic_content/fixing_details_manager.js"
import { ItemDetailsManager } from "../dynamic_content/item_details_manager.js"
import { LoggingDetailsManager } from "../dynamic_content/logging_details_manager.js"
import { TestingDetailsManager } from "../dynamic_content/testing_details_manager.js"
import { WarningMessageManager } from "../dynamic_content/warning_message_manager.js"
import { SpreadsheetRecordFetcher } from "../spreadsheet_api/spreadsheet_record_fetcher.js"

export class RecordLoader {
  constructor() {
    this.loggingDetailsManager = new LoggingDetailsManager()
    this.testingDetailsManager = new TestingDetailsManager()
    this.fixingDetailsManager = new FixingDetailsManager()
    this.recordFetcher = new SpreadsheetRecordFetcher()
    this.warningMessageManager = new WarningMessageManager()
    this.itemDetailsManager = new ItemDetailsManager()
  }

  async loadRecordData() {
    const [recordRow, rowIndex] = await this.loadRecordRow()

    if (recordRow) {
        this.loggingDetailsManager.populateDetails(recordRow)
        this.testingDetailsManager.populateDetails(recordRow)
        this.fixingDetailsManager.populateDetails(recordRow)
        this.itemDetailsManager.displayAllForms()
        this.itemDetailsManager.displayItemDetails()
    }

    // Return the row number in the spreadsheet
    return rowIndex + 1
  }

  async loadRecordRow() {
    const params = new URLSearchParams(location.search.substring(1))
    const recordId = params.get("record-id")
    document.getElementById("record-id").value = recordId

    if (recordId) {
      const [recordRow, rowIndex] = await this.recordFetcher.loadRecordRow(recordId)
      if (recordRow) {
        return [recordRow, rowIndex]
      } else {
        this.warningMessageManager.displayMessage(`Record with id ${recordId} could not be found!`)
      }
    }
  }
}