class AddressStepPage {
    private proceedToCheckoutBtn: string;

    constructor() {
        this.proceedToCheckoutBtn = ".cart_navigation > .button[name='processAddress']";
    }

    public goToShippingStep(): void {
        cy.get(this.proceedToCheckoutBtn).click()
    }
}

export { AddressStepPage }
