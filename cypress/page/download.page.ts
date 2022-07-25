class DownloadPage {
    private downloadDemoUrl: string;
    private downloadBtn: string;

    constructor() {
        this.downloadDemoUrl = "https://demoqa.com/upload-download";
        this.downloadBtn = "#downloadButton";
    }

    public visitDownloadPage(): void{
        cy.visit(this.downloadDemoUrl);
    }

    public downloadFile(): void{
        cy.get(this.downloadBtn).click();
    }

    public verifyFileName(fileName: string): void{
        cy.readFile('cypress/downloads/'+fileName).should('exist');
    }
}

export { DownloadPage }
