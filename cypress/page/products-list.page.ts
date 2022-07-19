class ProductsListPage {
    private addToCartBtn: string;
    private allProducts: string;

    constructor() {
        this.addToCartBtn = "a[title='Add to cart']";
        this.allProducts = ".product-container";
    }

    public addTShirtToCart(productName: string): void {
        this.findProductByName(productName).find(this.addToCartBtn).click();
    }

    public findProductByName(productName: string) {
        return cy.get(this.allProducts).filter(`:contains("${productName}")`)
    }
}

export { ProductsListPage }
