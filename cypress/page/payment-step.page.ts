class PaymentStepPage {
    private bankwireBtn: string;
    private confirmOrderBtn: string;

    constructor() {
        this.bankwireBtn = ".bankwire";
        this.confirmOrderBtn = "#cart_navigation > .button > span";
    }

    public selectPaymentMethod(): void {
        cy.get(this.bankwireBtn).click();
    }

    public confirmOrder(): void {
        cy.get(this.confirmOrderBtn).click();
    }
}

export { PaymentStepPage }
