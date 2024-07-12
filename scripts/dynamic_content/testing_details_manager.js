import { RegisTestingDetailsViewModel, DonationTestingDetailsViewModel } from "../data/testing_details_view_model.js"


export class TestingDetailsManager {
  constructor() {
    this.testingStatusEdit = document.getElementById('testing-status-edit')
    this.notesEdit = document.getElementById('testing-notes-edit')
    this.patStatusEdit = document.getElementById('pat-status-before-edit')
  }

  populateRegisDetails(row) {
    const viewModel = new RegisTestingDetailsViewModel(row)
    if (viewModel.testingStatus) {
      this.testingStatusEdit.value = viewModel.testingStatus
    }
    
    this.notesEdit.value = viewModel.notes
    
    if (viewModel.patStatusBeforeFix) {
      this.patStatusEdit.value = viewModel.patStatusBeforeFix
    }
  }

  populateDonationDetails(row) {
    const viewModel = new DonationTestingDetailsViewModel(row)
    if (viewModel.testingStatus) {
      this.testingStatusEdit.value = viewModel.testingStatus
    }
    
    this.notesEdit.value = viewModel.notes
    
    if (viewModel.patStatusBeforeFix) {
      this.patStatusEdit.value = viewModel.patStatusBeforeFix
    }
  }
}