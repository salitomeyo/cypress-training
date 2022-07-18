class ProductsListPage {
    private addToCartBtn: string;

    constructor() {
        // Eliminate .btn.btn-default, this is innecesary because with the previous selectors we already reach the desired button
        this.addToCartBtn = "#center_column a.button.ajax_add_to_cart_button";
    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartBtn).click();
    }
}

export { ProductsListPage }
