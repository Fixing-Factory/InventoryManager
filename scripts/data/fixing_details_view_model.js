export class FixingDetailsViewModel {
  constructor(row) {
    this.fixerName = row[10] || "MISSING"
    this.fixerNotes = row[11] || "NONE"
    this.patStatusAfterFix = row[9]?.trim()
    this.diagnosis = row[12] || "MISSING"
    this.partsNeeded = row[13] || "NONE"
  }
}