import { LoggingDetailsViewModel } from "../data/logging_details_view_model.js"

export class LoggingDetailsManager {
  constructor() {
    this.timestampEdit = document.getElementById('timestamp-edit')
    this.idEdit = document.getElementById('item-id-edit')
    this.brandNameEdit = document.getElementById('brand-name-edit')
    this.itemTypeEdit = document.getElementById('item-type-edit')
    this.modelNumberEdit = document.getElementById('model-number-edit')
    this.weightEdit = document.getElementById('weight-edit')
  }

  populateDetails(row) {
    const viewModel = new LoggingDetailsViewModel(row)
    this.timestampEdit.value = viewModel.timestamp
    this.idEdit.value = viewModel.id
    this.brandNameEdit.value = viewModel.brandName
    this.itemTypeEdit.value = viewModel.itemType
    this.modelNumberEdit.value = viewModel.modelNumber
    this.weightEdit.value = viewModel.weight
  }
}