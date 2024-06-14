import { TestingDetails } from "../data/TestingDetails.js";
import { LoggingDetails } from "../data/loggingDetails.js";
import { SpreadsheetRecordUpdater } from "../spreadsheet_api/spreadsheet_record_updater.js";

export class EditFormManager {
  constructor(rowNumber) {
    this.rowNumber = rowNumber
    this.loggingDetailsEditForm = document.getElementById("logging-details-edit")
    this.testingDetailsEditForm = document.getElementById("testing-details-edit")

    this.spreadsheetRecordUpdater = new SpreadsheetRecordUpdater()
  }

  initialiseForms() {
    this.loggingDetailsEditForm.addEventListener('submit', (event) => this.formSubmit(event))
    this.testingDetailsEditForm.addEventListener('submit', (event) => this.formSubmit(event))
    this.loggingDetailsEditForm.addEventListener('formdata', (event) => this.processLoggingEditFormData(event))
    this.testingDetailsEditForm.addEventListener('formdata', (event) => this.processTestingEditFormData(event))
  }

  processLoggingEditFormData(event) {
    const data = event.formData;

    const id = data.get("item-id-edit")
    const brandName = data.get("brand-name-edit")
    const itemType = data.get("item-type-edit")
    const modelNumber = data.get("model-number-edit")
    const weight = data.get("weight-edit")

    const loggingDetails = new LoggingDetails(id, brandName, itemType, modelNumber, weight)

    this.spreadsheetRecordUpdater.updateRecordLoggingDetails(loggingDetails, this.rowNumber)
  }

  processTestingEditFormData(event) {
    const data = event.formData;

    const testingStatus = data.get("testing-status-edit")
    const testingNotes = data.get("testing-notes-edit")
    const patStatusBefore = data.get("pat-status-before-edit")

    const testingDetails = new TestingDetails(testingStatus, testingNotes, patStatusBefore)

    this.spreadsheetRecordUpdater.updateRecordTestingDetails(testingDetails, this.rowNumber)
  }

  formSubmit(event) {
    // Implicitly raises a "formdata" event (so we can actually read the data and use it!)
    new FormData(event.target);

    // Suppresses the default form behaviour of directing to a new page on page submit
    event.preventDefault()
  }
}