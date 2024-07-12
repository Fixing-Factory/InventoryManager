export class RegisFixingDetailsViewModel {
  constructor(row) {
    this.fixerName = row[10] || "MISSING"
    this.patStatusAfterFix = row[9]?.trim()
  }
}

export class DonationFixingDetailsViewModel {
  constructor(row) {
    this.fixerName = row[16] || "MISSING"
    this.patStatusAfterFix = row[10]?.trim()
  }
}