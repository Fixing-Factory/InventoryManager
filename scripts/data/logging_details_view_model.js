export class LoggingDetailsViewModel {
  constructor(row) {
    this.timestamp = row[0]
    this.id = row[1]
    this.brandName = row[2]
    this.itemType = row[3]
    this.modelNumber = row[4]
    this.weight = row[5]
  }
}