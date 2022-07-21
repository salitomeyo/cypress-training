import { forEach } from "cypress/types/lodash";

class PersonalFormPage {
    private personalInfoFormUrl: string;
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
        this.personalInfoFormUrl = "https://demoqa.com/automation-practice-form";
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

    public visitPersonalInfoFormPage(): void{
        cy.visit(this.personalInfoFormUrl);
    }

    public fillForm(personalInformation: PersonalFormPage.PersonalInformation): void {
        cy.get(this.nameInput).type(personalInformation.name);
        cy.get(this.lastnameInput).type(personalInformation.lastName);
        cy.get(this.emailInput).type(personalInformation.email);
        cy.get(this.genderRadioBtn).check(personalInformation.gender, {force: true});
        this.fillDateInput(personalInformation.dateOfBirth);
        cy.get(this.mobileNumberInput).type(personalInformation.mobileNumber);
        personalInformation.hobbies.forEach(hobbie =>{
            cy.get(this.hobbiesCheckbox).filter(`:contains("${hobbie}")`).click();
        });
        cy.get(this.currentAddressInput).type(personalInformation.currentAddress);
        cy.get(this.submitBtn).click({force: true});
    }

    public fillDateInput(date: string){
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const newdate = new Date(date);
        const year = newdate.getFullYear();
        const month = monthNames[newdate.getMonth()];
        const day = newdate.getDate();
        cy.get(this.dateOfBirthPicker).click();
        cy.get(this.datePickerValues[0]).select(`${year}`);
        cy.get(this.datePickerValues[1]).select(`${month}`);
        cy.get(this.datePickerValues[2]).filter(`:contains("${day}")`).eq(0).click()
    }

    public getModalTitle() {
        return cy.get(this.modalTitle);
    }
}

namespace PersonalFormPage {
    export interface PersonalInformation {
        name: string;
        lastName: string;
        email: string;
        gender: string;
        dateOfBirth: string;
        mobileNumber: string;
        hobbies: string[];
        currentAddress: string;
    }
}

export { PersonalFormPage }
