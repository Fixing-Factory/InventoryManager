export class ItemDetailsManager {
  constructor() {
    this.allFormsElement = document.getElementById("all-forms")
    this.loggingDetailsEditElement = document.getElementById("logging-details-edit")
    this.testingDetailsEditElement = document.getElementById("testing-details-edit")
    this.fixingDetailsEditElement = document.getElementById("fixing-details-edit")

    this.loggingDetailsButton = document.getElementById("logging-button")
    this.fixingDetailsButton = document.getElementById("fixing-button")
    this.testingDetailsButton = document.getElementById("testing-button")

    this.setupDisplayToggles()
  }

  setupDisplayToggles() {
    this.loggingDetailsButton.addEventListener("click", () => { this.displayItemDetails() })
    this.fixingDetailsButton.addEventListener("click", () => { this.displayFixingDetails() })
    this.testingDetailsButton.addEventListener("click", () => { this.displayTestingDetails() })
  }

  displayAllForms() {
    this.allFormsElement.className = "enabled"
  }

  displayItemDetails() {
    this.loggingDetailsEditElement.className = "enabled"
    this.testingDetailsEditElement.className = "disabled"
    this.fixingDetailsEditElement.className = "disabled"
  }

  displayTestingDetails() {
    this.loggingDetailsEditElement.className = "disabled"
    this.testingDetailsEditElement.className = "enabled"
    this.fixingDetailsEditElement.className = "disabled"
  }

  displayFixingDetails() {
    this.loggingDetailsEditElement.className = "disabled"
    this.testingDetailsEditElement.className = "disabled"
    this.fixingDetailsEditElement.className = "enabled"
  }
}