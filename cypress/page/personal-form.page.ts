import { forEach } from "cypress/types/lodash";

class PersonalFormPage {
    private nameInput: string;
    private lastnameInput: string;
    private emailInput: string;
    private genderRadioBtn: string;
    private dateInput: string;
    private mobileNumberInput: string;
    private hobbiesInput: string;
    private currentAddressInput: string;

    constructor() {
        this.nameInput = "#firstName";
        this.lastnameInput = "#lastName";
        this.emailInput = "#userEmail";
        this.genderRadioBtn = '[name="gender"]';
        this.dateInput = "#dateOfBirthInput";
        this.mobileNumberInput = "#userNumber";
        this.hobbiesInput = ".custom-checkbox";
        this.currentAddressInput = "#currentAddress";
    }

    public fillForm(personalInformation: { name: string; lastName: string; email: string; gender: string; dateOfBirth: string; mobileNumber: string; hobbies: string[]; currentAddress: string; }): void {
        cy.get(this.nameInput).type(personalInformation.name);
        cy.get(this.lastnameInput).type(personalInformation.lastName);
        cy.get(this.emailInput).type(personalInformation.email);
        cy.get(this.genderRadioBtn).check(personalInformation.gender, {force: true});
        cy.get(this.mobileNumberInput).type(personalInformation.mobileNumber);
        // cy.get(this.hobbiesInput).check(personalInformation.hobbies, {force: true});
        // cy.get(this.dateInput).type(personalInformation.dateOfBirth);
        personalInformation.hobbies.forEach(hobbie =>
        {
            cy.get(this.hobbiesInput).filter(`:contains("${hobbie}")`).click();
        });
        cy.get(this.currentAddressInput).type(personalInformation.currentAddress);
    }

    public fillDateInput(date: string){
    }
}

export { PersonalFormPage }
