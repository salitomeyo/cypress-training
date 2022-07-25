import {
  IframePage,
} from "../page/index";

describe("Working with an iframe", () => {
  let iframePage: IframePage;
  let iframeTitle: string;

  before(() => {
    iframePage = new IframePage();
    iframeTitle = "HTML Tutorial";

    iframePage.visit();
  });

  it("then an iframe should be interactive", () => {
    iframePage.getFrameTitle().should("eq", iframeTitle);

    iframePage.goToCssPageInFrame();
  });
});
