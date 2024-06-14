import { SpreadsheetRecordUpdater } from "./spreadsheet_api/spreadsheet_record_updater.js"
import { RecordLoader } from "./loaders/record_loader.js"
import { EditFormManager } from "./dynamic_content/edit_form_manager.js"

async function main() {
  const recordLoader = new RecordLoader()
  const rowIndex = await recordLoader.loadRecordData()

  const editFormManager = new EditFormManager(rowIndex)
  editFormManager.initialiseForms()
}

main()