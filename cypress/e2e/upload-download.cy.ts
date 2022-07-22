import {
    UploadPage,
  } from "../page/index";
  
  describe("Upload a file", () => {
    let uploadPage: UploadPage;
    let fileName: string;
  
    before(() => {
      fileName = "example.json";
      uploadPage = new UploadPage();
  
      uploadPage.visitUploadPage();
    });
  
    it("then a file should be uploaded", () => {
        uploadPage.uploadFile(fileName);

        uploadPage.verifyFileName(fileName);
    });
  });
  
  