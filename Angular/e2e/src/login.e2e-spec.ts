import { AppPage } from "./app.po";
import { by, element } from "protractor";

describe("LoginComponent Form", () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo("user/login");
  });

  it("should require email and password input before form submission", () => {
    element(by.id("email")).click();
    element(by.id("password")).click();
    expect(element(by.className("btn-primary")).getAttribute("disabled"))
      .toBeTruthy;
  });

  it("should display an error message only when email input is invalid", () => {
    element(by.id("email")).sendKeys("test");
    element(by.id("password")).click();
    expect(element(by.id("emailError"))).toBeTruthy;
    element(by.id("email")).sendKeys("@tasksimple.com");
    expect(element(by.id("emailError"))).not.toBeTruthy;
  });

  it("should display an error message only when password input is invalid", () => {
    element(by.id("password")).sendKeys("pass");
    element(by.id("email")).click();
    expect(element(by.id("passwordError"))).toBeTruthy;
    element(by.id("password")).sendKeys("word123!");
    expect(element(by.id("passwordError"))).not.toBeTruthy;
  });
});
