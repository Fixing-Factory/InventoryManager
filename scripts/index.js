import { GoogleAuthenticationClient } from "./auth/google_authentication_client.js"
import { RecordLoader } from "./loaders/record_loader.js"


const recordLoader = new RecordLoader()
const authenticationClient = new GoogleAuthenticationClient()

async function main() {
  const accessToken = await authenticationClient.fetchToken()
  await recordLoader.loadRecordData()
}

main()