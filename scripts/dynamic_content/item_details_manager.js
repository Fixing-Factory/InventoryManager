export class ItemDetailsManager {
  constructor() {
    this.allDetailsElement = document.getElementById("all-details")
    this.allFormsElement = document.getElementById("all-forms")
    this.itemDetailsElement = document.getElementById("item-details")
    this.fixingDetailsElement = document.getElementById("fixing-details")
    this.testingDetailsElement = document.getElementById("testing-details")
    this.loggingDetailsEditElement = document.getElementById("logging-details-edit")
    this.testingDetailsEditElement = document.getElementById("testing-details-edit")

    this.loggingDetailsButton = document.getElementById("logging-button")
    this.fixingDetailsButton = document.getElementById("fixing-button")
    this.testingDetailsButton = document.getElementById("testing-button")
    this.updateButton = document.getElementById("update-button")

    this.setupDisplayToggles()
  }

  setupDisplayToggles() {
    this.loggingDetailsButton.addEventListener("click", () => { this.displayItemDetails() })
    this.fixingDetailsButton.addEventListener("click", () => { this.displayFixingDetails() })
    this.testingDetailsButton.addEventListener("click", () => { this.displayTestingDetails() })
    this.updateButton.addEventListener("click", () => { this.toggleUpdate() })
  }

  toggleUpdate() {
    if (this.updateButton.className === "active") {
      this.updateButton.className = ""
      this.displayAllDetails()
    } else {
      this.updateButton.className = "active"
      this.displayAllForms()
    }
    
  }

  displayAllDetails() {
    this.allDetailsElement.className = "enabled"
    this.allFormsElement.className = "disabled"
  }

  displayAllForms() {
    this.allDetailsElement.className = "disabled"
    this.allFormsElement.className = "enabled"
  }

  displayItemDetails() {
    this.itemDetailsElement.className = "enabled"
    this.loggingDetailsEditElement.className = "enabled"
    this.testingDetailsElement.className = "disabled"
    this.testingDetailsEditElement.className = "disabled"
    this.fixingDetailsElement.className = "disabled"
  }

  displayTestingDetails() {
    this.itemDetailsElement.className = "disabled"
    this.loggingDetailsEditElement.className = "disabled"
    this.testingDetailsElement.className = "enabled"
    this.testingDetailsEditElement.className = "enabled"
    this.fixingDetailsElement.className = "disabled"
  }

  displayFixingDetails() {
    this.itemDetailsElement.className = "disabled"
    this.loggingDetailsEditElement.className = "disabled"
    this.testingDetailsElement.className = "disabled"
    this.testingDetailsEditElement.className = "disabled"
    this.fixingDetailsElement.className = "enabled"
  }
}