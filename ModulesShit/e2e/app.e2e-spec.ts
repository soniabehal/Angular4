import { ModulesShitPage } from './app.po';

describe('modules-shit App', () => {
  let page: ModulesShitPage;

  beforeEach(() => {
    page = new ModulesShitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
