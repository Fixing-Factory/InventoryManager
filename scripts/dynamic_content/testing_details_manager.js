import { TestingDetailsViewModel } from "../data/testingDetailsViewModel.js"


export class TestingDetailsManager {
  constructor() {
    this.testingStatus = document.getElementById('testing-status')
    this.testingStatusEdit = document.getElementById('testing-status-edit')
    this.notes = document.getElementById('testing-notes')
    this.notesEdit = document.getElementById('testing-notes-edit')
    this.patStatus = document.getElementById('pat-before')
    this.patStatusEdit = document.getElementById('pat-status-before-edit')
  }

  populateDetails(row) {
    const viewModel = new TestingDetailsViewModel(row)
    this.testingStatus.textContent = viewModel.testingStatus
    this.testingStatusEdit.value = viewModel.testingStatus
    this.notes.textContent = viewModel.notes
    this.notesEdit.value = viewModel.notes
    this.patStatus.textContent = viewModel.patStatusBeforeFix
    this.patStatusEdit.value = viewModel.patStatusBeforeFix
  }
}