import {
  PersonalFormPage,
} from "../page/index";

const personalInformation = {
  name: "Holmes",
  lastName: "Salazar",
  email: "test@email.com",
  gender: "Male",
  dateOfBirth: "27 Jul 2016",
  mobileNumber: "3656589156",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
};

describe("Buy a t-shirt", () => {
  let personalFormPage: PersonalFormPage;

  before(() => {
    personalFormPage = new PersonalFormPage();

    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it("then the t-shirt should be bought", () => {
    personalFormPage.fillForm(personalInformation);
  });
});

