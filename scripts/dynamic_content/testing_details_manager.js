import { TestingDetailsViewModel } from "../data/testingDetailsViewModel.js"


export class TestingDetailsManager {
  constructor() {
    this.testingStatusEdit = document.getElementById('testing-status-edit')
    this.notesEdit = document.getElementById('testing-notes-edit')
    this.patStatusEdit = document.getElementById('pat-status-before-edit')
  }

  populateDetails(row) {
    const viewModel = new TestingDetailsViewModel(row)
    this.testingStatusEdit.value = viewModel.testingStatus
    this.notesEdit.value = viewModel.notes
    this.patStatusEdit.value = viewModel.patStatusBeforeFix
  }
}