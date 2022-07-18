class PaymentStepPage {
    private bankwireBtn: string;
    private confirmOrderBtn: string;
    private confirmOrderMessage: string;

    constructor() {
        this.bankwireBtn = ".bankwire";
        this.confirmOrderBtn = "#cart_navigation > .button";
        this.confirmOrderMessage = "#center_column > div > p > strong";
    }

    public selectPaymentMethod(): void {
        cy.get(this.bankwireBtn).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderBtn).click();
    }

    public getOrderLabel() {
        return cy.get(this.confirmOrderMessage)
    }
}

export { PaymentStepPage }
