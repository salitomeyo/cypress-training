import {
  UploadPage,
  DownloadPage,
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

describe("Download a file", () => {
  let downloadPage: DownloadPage;
  
  before(() => {
    downloadPage = new DownloadPage();

    downloadPage.visitDownloadPage();
  });

  it("then a file should be downloaded", () => {
    downloadPage.downloadFile();

    downloadPage.verifyFileName('sampleFile.jpeg');
  });
});
