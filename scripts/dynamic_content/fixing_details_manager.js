import { FixingDetailsViewModel } from "../data/fixing_details_view_model.js"


export class FixingDetailsManager {
  constructor() {
    this.fixerNameEdit = document.getElementById('fixer-name-edit')
    this.fixerNotesEdit = document.getElementById('fixer-notes-edit')
    this.diagnosisEdit = document.getElementById('diagnosis-edit')
    this.partsNeededEdit = document.getElementById('parts-needed-edit')
    this.patStatusAfterEdit = document.getElementById('pat-status-after-edit')
  }

  populateDetails(row) {
    const viewModel = new FixingDetailsViewModel(row)
    this.fixerNameEdit.value = viewModel.fixerName
    this.fixerNotesEdit.value = viewModel.fixerNotes
    this.diagnosisEdit.value = viewModel.diagnosis
    this.partsNeededEdit.value = viewModel.partsNeeded

    if (viewModel.patStatusAfterFix) {
      this.patStatusAfterEdit.value = viewModel.patStatusAfterFix
    }
  }
}