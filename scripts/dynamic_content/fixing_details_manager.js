import { DonationFixingDetailsViewModel, RegisFixingDetailsViewModel } from "../data/fixing_details_view_model.js"


export class FixingDetailsManager {
  constructor() {
    this.fixerNameEdit = document.getElementById('fixer-name-edit')
    this.patStatusAfterEdit = document.getElementById('pat-status-after-edit')
  }

  populateRegisDetails(row) {
    const viewModel = new RegisFixingDetailsViewModel(row)
    this.fixerNameEdit.value = viewModel.fixerName

    if (viewModel.patStatusAfterFix) {
      this.patStatusAfterEdit.value = viewModel.patStatusAfterFix
    }
  }

  populateDonationDetails(row) {
    const viewModel = new DonationFixingDetailsViewModel(row)
    this.fixerNameEdit.value = viewModel.fixerName

    if (viewModel.patStatusAfterFix) {
      this.patStatusAfterEdit.value = viewModel.patStatusAfterFix
    }
  }
}