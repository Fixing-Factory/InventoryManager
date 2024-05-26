export class GoogleAuthenticationClient {
  constructor() {
    this.oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
    this.clientId = "575297305808-p3dnopudl1cardivdq3mjspp09sl9st0.apps.googleusercontent.com"
  }

  async fetchToken() {
    const localAccessToken =  localStorage.getItem("access-token")

    if (!localAccessToken) {
      const urlAccessToken = this.checkUrlForToken()
      if (!urlAccessToken) {
        this.requestGoogleAuthentication()
      }
    }
  }

  checkUrlForToken() {
    // Google returns the access token from the fragment part of the URL (along with other values)
    // We unpack it into a dictionary using URLSearchParams and extract the value we need
    const params = new URLSearchParams(location.hash.substring(1))
    const accessToken = params.get("access_token")

    if (accessToken) {
      localStorage.setItem("google-auth-token", accessToken)
      return accessToken
    }
  }

  buildRedirectUri() {
    // We redirect straight back to the current page
    return location.href
  }

  async requestGoogleAuthentication() {
    // Create element to open OAuth 2.0 endpoint in new window.
    var form = document.createElement('form');
    form.setAttribute('method', 'GET')
    form.setAttribute('action', this.oauth2Endpoint)

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
      'client_id': this.clientId,
      'redirect_uri': this.buildRedirectUri(),
      'scope': "https://www.googleapis.com/auth/spreadsheets",
      'response_type': 'token'
    }

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', p)
      input.setAttribute('value', params[p])
      form.appendChild(input)
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form)
    form.submit()
  }
}
