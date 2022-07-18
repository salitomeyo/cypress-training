class ShippingStepPage {
    private termsAndConditionsCheckbox: string;
    private continueCheckoutBtn: string;

    constructor() {
        this.termsAndConditionsCheckbox = "#cgv";
        // Eliminate span, If the purpose is to click a button its unnecesary to reach for the span element, we can just eliminate this extra step and click the container
        // also added an additional argument to match the name of the button because i dont think the class button is a good enough identifier and it is not scalable
        this.continueCheckoutBtn = ".cart_navigation > .button[name='processCarrier']";
    }

    public acceptTermsAndConditions(): void {
        cy.get(this.termsAndConditionsCheckbox).check();
    }

    public goToPaymentStep(): void {
        cy.get(this.continueCheckoutBtn).click();
    }
}

export { ShippingStepPage }
