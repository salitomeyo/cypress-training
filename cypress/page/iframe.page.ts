class IframePage {
    private w3IframeUrl: string;
    private iframe: string;
    private iframeTitle: string;
    private iframeCssNavBtn: string;

    constructor() {
        this.w3IframeUrl = "https://www.w3schools.com/html/html_iframe.asp";
        this.iframe = "iframe[title='W3Schools HTML Tutorial']";
        this.iframeTitle = "#main h1"
        this.iframeCssNavBtn = "a[title='CSS Tutorial']"
    }

    public visit(){
        cy.visit(this.w3IframeUrl);
    }
      
    public getFrameTitle(){
        return cy.iframe(this.iframe).find(this.iframeTitle).invoke("text");
    }
      
    public goToCssPageInFrame(){
        cy.iframe(this.iframe).find(this.iframeCssNavBtn).click();
    }
}

export { IframePage }
