import { DirectivesShitPage } from './app.po';

describe('directives-shit App', () => {
  let page: DirectivesShitPage;

  beforeEach(() => {
    page = new DirectivesShitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
