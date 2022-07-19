import {MenuContentPage, DressesListPage} from "../page/index";

const expectedDressNames = [
  "Printed Dress", "Printed Dress",
  "Printed Summer Dress",
  "Printed Summer Dress",
  "Printed Chiffon Dress",
];

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    
    menuContentPage.visitMenuContentPage();
  });

  it("show the available dresses", () => {
    menuContentPage.goToDressesMenu();

    dressesListPage.validateItemsNumber(expectedDressNames.length);
    dressesListPage.validateItemsNames(expectedDressNames);
  });
});
