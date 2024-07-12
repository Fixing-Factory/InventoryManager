export class RegisTestingDetailsViewModel {
  constructor(row) {
    this.testingStatus = row[6]?.trim()
    this.notes = row[7] || "NONE"
    this.patStatusBeforeFix = row[8]?.trim()
  }
}

export class DonationTestingDetailsViewModel {
  constructor(row) {
    this.testingStatus = row[6]?.trim()
    this.notes = row[7] || "NONE"
    this.patStatusBeforeFix = row[9]?.trim()
  }
}