import { ModulesAndGaurdsTestPage } from './app.po';

describe('modules-and-gaurds-test App', () => {
  let page: ModulesAndGaurdsTestPage;

  beforeEach(() => {
    page = new ModulesAndGaurdsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
