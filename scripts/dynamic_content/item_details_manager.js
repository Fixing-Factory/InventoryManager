export class ItemDetailsManager {
  constructor() {
    this.itemDetailsElement = document.getElementById("item-details")
  }

  display(message) {
    this.itemDetailsElement.className = "enabled"
  }
}