import { FixingDetailsManager } from "../dynamic_content/fixing_details_manager.js"
import { ItemDetailsManager } from "../dynamic_content/item_details_manager.js"
import { LoggingDetailsManager } from "../dynamic_content/logging_details_manager.js"
import { TestingDetailsManager } from "../dynamic_content/testing_details_manager.js"
import { WarningMessageManager } from "../dynamic_content/warning_message_manager.js"
import { SPREADSHEETCONFIG } from "../spreadsheet_api/spreadsheet_properties.js"
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
    const rowdata = await this.loadRecordRow()

    if (rowdata) {
      const [recordRow, rowIndex, sheetName] = rowdata

      if (sheetName == SPREADSHEETCONFIG.regisRoadSheetName){
        this.loggingDetailsManager.populateDetails(recordRow)
        this.testingDetailsManager.populateDonationDetails(recordRow)
        this.fixingDetailsManager.populateRegisDetails(recordRow)
        this.itemDetailsManager.displayAllForms()
        this.itemDetailsManager.displayItemDetails()
      }

      if (sheetName == SPREADSHEETCONFIG.donationSheetName){
        this.loggingDetailsManager.populateDetails(recordRow)
        this.testingDetailsManager.populateDonationDetails(recordRow)
        this.fixingDetailsManager.populateDonationDetails(recordRow)
        this.itemDetailsManager.displayAllForms()
        this.itemDetailsManager.displayItemDetails()
      }

      // Return the row number in the spreadsheet
      return [rowIndex + 1, sheetName]
    }
  }

  async loadRecordRow() {
    const params = new URLSearchParams(location.search.substring(1))
    const recordId = params.get("record-id")
    document.getElementById("record-id").value = recordId

    if (recordId) {
      const rowData = await this.recordFetcher.loadRecordRow(recordId)
      if (rowData) {
        return rowData
      } else {
        this.warningMessageManager.displayMessage(`Record with id ${recordId} could not be found!`)
      }
    }
  }
}