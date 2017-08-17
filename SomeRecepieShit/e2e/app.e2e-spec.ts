import { SomeRecepieShitPage } from './app.po';

describe('some-recepie-shit App', () => {
  let page: SomeRecepieShitPage;

  beforeEach(() => {
    page = new SomeRecepieShitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
