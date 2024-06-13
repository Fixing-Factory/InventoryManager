import { TestingDetailsViewModel } from "../data/testingDetailsViewModel.js"


export class TestingDetailsManager {
  constructor() {
    this.testingStatus = document.getElementById('testing-status')
    this.notes = document.getElementById('testing-notes')
    this.patStatus = document.getElementById('pat-before')

  }

  populateDetails(row) {
    const viewModel = new TestingDetailsViewModel(row)
    this.testingStatus.textContent = viewModel.testingStatus
    this.notes.textContent = viewModel.notes
    this.patStatus.textContent = viewModel.patStatusBeforeFix
  }
}