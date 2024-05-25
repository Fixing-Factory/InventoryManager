export class TestFileFetcher {
  constructor() {
  }

  async loadData() {
    const response = await fetch("./static/test_item.json")

    const responseJson = await response.json()

    return responseJson
  }
}