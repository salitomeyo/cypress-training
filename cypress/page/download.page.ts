class DownloadPage {
    private downloadDemoUrl: string;
    private downloadBtn: string;
    private uploadedFileTitle: string;

    constructor() {
        this.downloadDemoUrl = "https://demoqa.com/upload-download";
        this.downloadBtn = "#downloadButton";
        this.uploadedFileTitle = "#drag-drop-upload .dz-filename > span";
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
