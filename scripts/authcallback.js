import { GoogleAuthenticationClient } from "./auth/google_authentication_client.js"
import { WarningMessageManager } from "./dynamic_content/warning_message_manager.js"

async function main() {
  const authClient = new GoogleAuthenticationClient()
  const warningMessageManager = new WarningMessageManager()
  const accessToken = authClient.checkUrlForToken()


  if (accessToken) {
    localStorage.setItem("google-access-token", accessToken)
    const recordId = localStorage.getItem("previous-record-id")
    localStorage.removeItem("previous-record-id")
    let queryString = ""
    if (recordId) {
      queryString = `?record-id=${recordId}`
    }

    const page = localStorage.getItem("previous-page")
    localStorage.removeItem("previous-page")
    let pathString = page || ""

    location.assign(`${location.origin}${pathString}${queryString}`)
  } else {
    warningMessageManager.displayMessage("Authentication with Google Failed")
  }
}

main()