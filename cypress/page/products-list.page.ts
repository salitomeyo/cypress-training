class ProductsListPage {
    private addToCartBtn: string;

    constructor() {
        this.addToCartBtn = ".ajax_add_to_cart_button";
    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartBtn).click();
    }
}

export { ProductsListPage }
