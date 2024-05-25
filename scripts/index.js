import { RecordLoader } from "./loaders/record_loader.js"

const recordLoader = new RecordLoader()

async function main() {
  await recordLoader.loadRecordData()
}

main()