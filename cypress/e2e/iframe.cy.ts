import {
  IframePage,
} from "../page/index";

describe("Working with an iframe", {
  retries: {
    runMode: 3,
    openMode: 2,
  },
}, () => {
  let iframePage: IframePage;

  before(() => {
    iframePage = new IframePage();

    iframePage.visit();
  });

  it("then an iframe should be selected", () => {
    iframePage.getFrameTitle().should("eq", "HTML Tutorial");

    iframePage.goToCssPageInFrame();
  });
});
