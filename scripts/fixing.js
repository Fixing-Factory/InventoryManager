import { RecordLoader } from "./loaders/record_loader.js"

async function main() {
  const recordLoader = new RecordLoader()
  await recordLoader.loadFixingRecordData()
}

main()