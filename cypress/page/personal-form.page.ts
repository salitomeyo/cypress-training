import { forEach } from "cypress/types/lodash";

class PersonalFormPage {
    private nameInput: string;
    private lastnameInput: string;
    private emailInput: string;
    private genderRadioBtn: string;
    private dateOfBirthPicker: string;
    private datePickerValues: string[];
    private mobileNumberInput: string;
    private hobbiesCheckbox: string;
    private currentAddressInput: string;
    private submitBtn: string;
    private modalTitle: string;

    constructor() {
        this.nameInput = "#firstName";
        this.lastnameInput = "#lastName";
        this.emailInput = "#userEmail";
        this.genderRadioBtn = '[name="gender"]';
        this.dateOfBirthPicker = "#dateOfBirthInput";
        this.datePickerValues = [".react-datepicker__year-select", ".react-datepicker__month-select", ".react-datepicker__day"];
        this.mobileNumberInput = "#userNumber";
        this.hobbiesCheckbox = '.custom-checkbox';
        this.currentAddressInput = "#currentAddress";
        this.submitBtn = "#submit";
        this.modalTitle = "#example-modal-sizes-title-lg";
    }

    public fillForm(personalInformation: { name: string; lastName: string; email: string; gender: string; dateOfBirth: string; mobileNumber: string; hobbies: string[]; currentAddress: string;}): void {
        cy.get(this.nameInput).type(personalInformation.name);
        cy.get(this.lastnameInput).type(personalInformation.lastName);
        cy.get(this.emailInput).type(personalInformation.email);
        cy.get(this.genderRadioBtn).check(personalInformation.gender, {force: true});
        this.fillDateInput(personalInformation.dateOfBirth);
        cy.get(this.mobileNumberInput).type(personalInformation.mobileNumber);
        personalInformation.hobbies.forEach(hobbie =>
            {
                cy.get(this.hobbiesCheckbox).filter(`:contains("${hobbie}")`).click();
            });
        cy.get(this.currentAddressInput).type(personalInformation.currentAddress);
        cy.get(this.submitBtn).click({force: true});
    }

    public fillDateInput(date: string){
        let year;
        let month;
        let day;
        cy.get(this.dateOfBirthPicker).click();
        if (date.length == 10) {
            day = date[0]
            month = date.substring(2, 5)
            year = date.substring(6)
        }
        else {
            day = date.substring(0, 1)
            month = date.substring(3, 6)
            year = date.substring(7)
        }
        switch (month) {
            case "Jan":
                month = "January";
                break;
            case "Feb":
                month = "February";
                break;
            case "Mar":
                month = "March";
                break;
            case "Apr":
                month = "April";
                break;
            case "Jun":
                month = "June";
                break;
            case "Jul":
                month = "July";
                break;
            case "Aug":
                month = "August";
                break;
            case "Sep":
                month = "September";
                break;
            case "Oct":
                month = "October";
                break;
            case "Nov":
                month = "November";
                break;
            case "Dic":
                month = "Dicember";
                break;
        }
        cy.get(this.datePickerValues[0]).select(`${year}`);
        cy.get(this.datePickerValues[1]).select(`${month}`);
        cy.get(this.datePickerValues[2]).filter(`:contains("${day}")`).eq(0).click()
    }

    public getModalTitle() {
        return cy.get(this.modalTitle);
    }
}

export { PersonalFormPage }
