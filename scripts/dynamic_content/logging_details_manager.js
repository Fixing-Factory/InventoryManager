import { LoggingDetailsViewModel } from "../data/loggingDetailsViewModel.js"

export class LoggingDetailsManager {
  constructor() {
    this.timestamp = document.getElementById('logged-timestamp')
    this.id = document.getElementById('item-id')
    this.brandName = document.getElementById('brand-name')
    this.itemType = document.getElementById('item-type')
    this.modelNumber = document.getElementById('model-number')
    this.weight = document.getElementById('weight')
  }

  populateDetails(row) {
    const viewModel = new LoggingDetailsViewModel(row)
    this.timestamp.textContent = viewModel.timestamp
    this.id.textContent = viewModel.id
    this.brandName.textContent = viewModel.brandName
    this.itemType.textContent = viewModel.itemType
    this.modelNumber.textContent = viewModel.modelNumber
    this.weight.textContent = viewModel.weight
  }
}