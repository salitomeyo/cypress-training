class AddressStepPage {
    private proceedToCheckoutBtn: string;

    constructor() {
        // Eliminate span, If the purpose is to click a button its unnecesary to reach for the span element, we can just eliminate this extra step and click the container
        // also added an additional argument to match the name of the button because i dont think the class button is a good enough identifier and it is not scalable
        this.proceedToCheckoutBtn = ".cart_navigation > .button[name='processAddress']";
    }

    public goToShippingStep(): void {
        cy.get(this.proceedToCheckoutBtn).click()
    }
}

export { AddressStepPage }
