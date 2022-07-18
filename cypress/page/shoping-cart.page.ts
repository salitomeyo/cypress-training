
class ShopingCartPage {
    private goToCartBtn: string;
    private goToCheckoutBtn: string;

    constructor() {
        this.goToCartBtn = ".button-container > .button-medium";
        this.goToCheckoutBtn = ".cart_navigation > .standard-checkout";
    }

    public goToCartPage(): void {
        cy.get(this.goToCartBtn).click();
    }

    public goToCheckoutPage(): void {
        cy.get(this.goToCheckoutBtn).click();
    }
}

export { ShopingCartPage }
