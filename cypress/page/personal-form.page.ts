interface PersonalInformation {
    name: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
    mobileNumber: string;
    hobbies: string[];
    currentAddress: string;
}

class PersonalFormPage {
    private personalInfoFormUrl: string;
    private nameInput: string;
    private lastnameInput: string;
    private emailInput: string;
    private genderRadioBtn: string;
    private dateOfBirthPicker: string;
    private daysOutsideMonth: string;
    private datePickerValues: {"year": string, "month": string, "day": string};
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
        this.daysOutsideMonth = ".react-datepicker__day--outside-month";
        this.datePickerValues = {"year":".react-datepicker__year-select", "month":".react-datepicker__month-select", "day":".react-datepicker__day"};
        this.mobileNumberInput = "#userNumber";
        this.hobbiesCheckbox = '.custom-checkbox';
        this.currentAddressInput = "#currentAddress";
        this.submitBtn = "#submit";
        this.modalTitle = "#example-modal-sizes-title-lg";
    }

    public visitPersonalInfoFormPage(): void{
        cy.visit(this.personalInfoFormUrl);
    }

    public fillForm(personalInformation: PersonalInformation): void {
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

    private fillDateInput(date: string){
        const newdate = new Date(date);
        cy.get(this.dateOfBirthPicker).click();
        cy.get(this.datePickerValues.year).select(`${newdate.getFullYear()}`);
        cy.get(this.datePickerValues.month).select(`${newdate.toLocaleString('default', { month: 'long' })}`);
        cy.get(this.datePickerValues.day).not(this.daysOutsideMonth).filter(`:contains("${newdate.getDate()}")`).click();
    }

    public getModalTitle() {
        return cy.get(this.modalTitle);
    }
}

export { PersonalFormPage }
