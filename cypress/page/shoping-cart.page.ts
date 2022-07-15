
class ShopingCartPage {
    private goToCartBtn: string;
    private goToCheckoutBtn: string;

    constructor() {
        this.goToCartBtn = "[style*='display: block;'] .button-container > a";
        this.goToCheckoutBtn = ".cart_navigation span";
    }

    public goToCartPage(): void {
        cy.get(this.goToCartBtn).click();
    }

    public goToCheckoutPage(): void {
        cy.get(this.goToCheckoutBtn).click();
    }
}

export { ShopingCartPage }