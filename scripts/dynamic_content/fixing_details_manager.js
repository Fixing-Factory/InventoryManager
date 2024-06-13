import { FixingDetailsViewModel } from "../data/fixingDetailsViewModel.js"


export class FixingDetailsManager {
  constructor() {
    this.fixerName = document.getElementById('fixer-name')
    this.fixerNotes = document.getElementById('fixer-notes')
    this.diagnosis = document.getElementById('diagnosis')
    this.partsNeeded = document.getElementById('parts-needed')
    this.patStatusAfter = document.getElementById('pat-after')
  }

  populateDetails(row) {
    const viewModel = new FixingDetailsViewModel(row)
    this.fixerName.textContent = viewModel.fixerName
    this.fixerNotes.textContent = viewModel.fixerNotes
    this.diagnosis.textContent = viewModel.diagnosis
    this.partsNeeded.textContent = viewModel.partsNeeded
    this.patStatusAfter.textContent = viewModel.patStatusAfterFix
  }
}