class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string

    constructor() {
        // Use the class sf-menu instead of the ul because this will ensure even if the are different menus like a sub menu (which is really common) we will always access the intended one
        this.tShirtMenu = "#block_top_menu > .sf-menu > :nth-child(3) > a";
        this.menuContentPageURL = "http://automationpractice.com/"
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL)
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click()
    }
}

export { MenuContentPage }
