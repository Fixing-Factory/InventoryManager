export class LoggingDetailsManager {
  constructor() {
    this.timestamp = document.getElementById('logged-timestamp')
    this.idInput = document.getElementById('item-id')
    this.brandName = document.getElementById('brand-name')
    this.itemType = document.getElementById('item-type')
    this.modelNumber = document.getElementById('model-number')
    this.weight = document.getElementById('weight')
  }

  populateDetails(row) {
    this.timestamp.textContent = row[0]
    this.idInput.textContent = row[1]
    this.brandName.textContent = row[2]
    this.itemType.textContent = row[3]
    this.modelNumber.textContent = row[4]
    this.weight.textContent = row[5]
  }
}