import { FixingDetailsViewModel } from "../data/fixingDetailsViewModel.js"


export class FixingDetailsManager {
  constructor() {
    this.fixerName = document.getElementById('fixer-name')
    this.fixerNameEdit = document.getElementById('fixer-name-edit')
    this.fixerNotes = document.getElementById('fixer-notes')
    this.fixerNotesEdit = document.getElementById('fixer-notes-edit')
    this.diagnosis = document.getElementById('diagnosis')
    this.diagnosisEdit = document.getElementById('diagnosis-edit')
    this.partsNeeded = document.getElementById('parts-needed')
    this.partsNeededEdit = document.getElementById('parts-needed-edit')
    this.patStatusAfter = document.getElementById('pat-after')
    this.patStatusAfterEdit = document.getElementById('pat-status-after-edit')
  }

  populateDetails(row) {
    const viewModel = new FixingDetailsViewModel(row)
    this.fixerName.textContent = viewModel.fixerName
    this.fixerNameEdit.value = viewModel.fixerName
    this.fixerNotes.textContent = viewModel.fixerNotes
    this.fixerNotesEdit.value = viewModel.fixerNotes
    this.diagnosis.textContent = viewModel.diagnosis
    this.diagnosisEdit.value = viewModel.diagnosis
    this.partsNeeded.textContent = viewModel.partsNeeded
    this.partsNeededEdit.value = viewModel.partsNeeded
    this.patStatusAfter.textContent = viewModel.patStatusAfterFix
    this.patStatusAfterEdit.value = viewModel.patStatusAfterFix
  }
}