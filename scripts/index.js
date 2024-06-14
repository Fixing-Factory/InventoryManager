import { SpreadsheetRecordUpdater } from "./fetchers/spreadsheet_record_updater.js"
import { RecordLoader } from "./loaders/record_loader.js"

async function main() {
  const recordLoader = new RecordLoader()
  await recordLoader.loadRecordData()
  const recordUpdater = new SpreadsheetRecordUpdater()

  await recordUpdater.testUpdate()
}

main()