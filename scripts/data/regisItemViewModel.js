export class RegisItemViewModel {
  constructor(row) {
    this.id = row[1]
    this.brandName = row[2]
    this.itemType = row[3]
  }
}