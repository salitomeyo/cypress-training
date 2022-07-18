import {
  AddressStepPage,
  LoginPage,
  MenuContentPage,
  PaymentStepPage,
  ProductsListPage,
  ShippingStepPage,
  ShopingCartPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
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
