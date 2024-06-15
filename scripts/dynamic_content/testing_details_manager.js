import { TestingDetailsViewModel } from "../data/testing_details_view_model.js"


export class TestingDetailsManager {
  constructor() {
    this.testingStatusEdit = document.getElementById('testing-status-edit')
    this.notesEdit = document.getElementById('testing-notes-edit')
    this.patStatusEdit = document.getElementById('pat-status-before-edit')
  }

  populateDetails(row) {
    const viewModel = new TestingDetailsViewModel(row)
    if (viewModel.testingStatus) {
      this.testingStatusEdit.value = viewModel.testingStatus
    }
    
    this.notesEdit.value = viewModel.notes
    
    if (viewModel.patStatusBeforeFix) {
      this.patStatusEdit.value = viewModel.patStatusBeforeFix
    }
  }
}