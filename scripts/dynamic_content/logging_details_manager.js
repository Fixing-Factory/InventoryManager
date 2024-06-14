import { LoggingDetailsViewModel } from "../data/loggingDetailsViewModel.js"

export class LoggingDetailsManager {
  constructor() {
    this.timestamp = document.getElementById('logged-timestamp')
    this.id = document.getElementById('item-id')
    this.idEdit = document.getElementById('item-id-edit')
    this.brandName = document.getElementById('brand-name')
    this.brandNameEdit = document.getElementById('brand-name-edit')
    this.itemType = document.getElementById('item-type')
    this.itemTypeEdit = document.getElementById('item-type-edit')
    this.modelNumber = document.getElementById('model-number')
    this.modelNumberEdit = document.getElementById('model-number-edit')
    this.weight = document.getElementById('weight')
    this.weightEdit = document.getElementById('weight-edit')
  }

  populateDetails(row) {
    const viewModel = new LoggingDetailsViewModel(row)
    this.timestamp.textContent = viewModel.timestamp
    this.id.textContent = viewModel.id
    this.idEdit.value = viewModel.id
    this.brandName.textContent = viewModel.brandName
    this.brandNameEdit.value = viewModel.brandName
    this.itemType.textContent = viewModel.itemType
    this.itemTypeEdit.value = viewModel.itemType
    this.modelNumber.textContent = viewModel.modelNumber
    this.modelNumberEdit.value = viewModel.modelNumber
    this.weight.textContent = viewModel.weight
    this.weightEdit.value = viewModel.weight
  }
}