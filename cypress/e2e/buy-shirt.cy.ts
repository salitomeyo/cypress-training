import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShopingCartPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productsListPage: ProductsListPage;
  let shopingCartPage: ShopingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shopingCartPage = new ShopingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();

    menuContentPage.visitMenuContentPage();
  })

  it("then the t-shirt should be bought", () => {
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirtToCart();

    shopingCartPage.goToCartPage();
    shopingCartPage.goToCheckoutPage();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");

    addressStepPage.goToShippingStep();

    shippingStepPage.acceptTermsAndConditions();
    shippingStepPage.goToPaymentStep();

    paymentStepPage.selectPaymentMethod();
    paymentStepPage.confirmOrder();
    paymentStepPage.getOrderLabel().should("have.text", "Your order on My Store is complete.");
  });
});
