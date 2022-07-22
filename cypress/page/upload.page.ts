class UploadPage {
    private uploadDemoUrl: string;
    private dragAndDropZone: string;
    private uploadedFileTitle: string;

    constructor() {
        this.uploadDemoUrl = "https://the-internet.herokuapp.com/upload";
        this.dragAndDropZone = "#drag-drop-upload";
        this.uploadedFileTitle = "#drag-drop-upload .dz-filename > span";
    }

    public visitUploadPage(): void{
        cy.visit(this.uploadDemoUrl);
    }

    public uploadFile(fileName: string): void{
        cy.get(this.dragAndDropZone)
        .attachFile(fileName, { subjectType: 'drag-n-drop' });
    }

    public verifyFileName(fileName: string): void{
        cy.get(this.uploadedFileTitle).should('have.text', fileName);
    }
}

export { UploadPage }
