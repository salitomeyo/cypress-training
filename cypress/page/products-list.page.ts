class ProductsListPage {
    private addToCartBtn: string;

    constructor() {
        this.addToCartBtn = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
    }

    public addTShirtToCart(): void {
        cy.get(this.addToCartBtn).click();
    }
}

export { ProductsListPage }
