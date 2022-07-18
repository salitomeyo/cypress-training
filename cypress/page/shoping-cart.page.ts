
class ShopingCartPage {
    private goToCartBtn: string;
    private goToCheckoutBtn: string;

    constructor() {
        // Eliminate [style*='display: block;'] it is usually a bad practice to use the styles as a selector because they are prone to change and can be applied to many different elements which makes it hard to identify a particular one
        this.goToCartBtn = ".button-container > .button-medium";
        // Use a class instead of span, span is a really common Element, so is not the best practice to use it as an identifier. its better to use a descriptive class that refers the functionality
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
