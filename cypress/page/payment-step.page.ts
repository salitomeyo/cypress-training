class PaymentStepPage {
    private bankwireBtn: string;
    private confirmOrderBtn: string;
    private confirmOrderMessage: string;

    constructor() {
        this.bankwireBtn = ".bankwire";
        this.confirmOrderBtn = "#cart_navigation > .button > span";
        this.confirmOrderMessage = "#center_column > div > p > strong";
    }

    public selectPaymentMethod(): void {
        cy.get(this.bankwireBtn).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderBtn).click();
        cy.get(this.confirmOrderMessage)
        .should("have.text", "Your order on My Store is complete.");
    }
}

export { PaymentStepPage }
