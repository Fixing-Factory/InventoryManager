export class FixingDetails {
  constructor(fixerName, fixerNotes, patStatusAfterFix, diagnosis, partsNeeded) {
    this.fixerName = fixerName
    this.fixerNotes = fixerNotes
    this.patStatusAfterFix = patStatusAfterFix
    this.diagnosis = diagnosis
    this.partsNeeded = partsNeeded
  }
}