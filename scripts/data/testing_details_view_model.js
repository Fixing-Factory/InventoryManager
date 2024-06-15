export class TestingDetailsViewModel {
  constructor(row) {
    this.testingStatus = row[6]?.trim()
    this.notes = row[7] || "NONE"
    this.patStatusBeforeFix = row[8]?.trim()
  }
}