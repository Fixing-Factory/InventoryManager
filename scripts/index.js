import { SpreadsheetRecordUpdater } from "./spreadsheet_api/spreadsheet_record_updater.js"
import { RecordLoader } from "./loaders/record_loader.js"
import { EditFormManager } from "./dynamic_content/edit_form_manager.js"

async function main() {
  const recordLoader = new RecordLoader()
  const [rowIndex, sheetName] = await recordLoader.loadRecordData()

  if (rowIndex) {
    const editFormManager = new EditFormManager(rowIndex, sheetName)
    editFormManager.initialiseForms()
  }
}

main()