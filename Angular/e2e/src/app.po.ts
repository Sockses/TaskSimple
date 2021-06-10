import { browser, by, element } from "protractor";

export class AppPage {
  navigateTo(url?: string): Promise<unknown> {
    return browser.get(browser.baseUrl + url) as Promise<unknown>;
  }
}
