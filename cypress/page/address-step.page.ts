class AddressStepPage {
    private proceedToCheckoutBtn: string;

    constructor() {
        this.proceedToCheckoutBtn = ".cart_navigation > .button > span";
    }

    public goToShippingStep(): void {
        cy.get(this.proceedToCheckoutBtn).click()
    }
}

export { AddressStepPage }
