import { DeploytestPage } from './app.po';

describe('deploytest App', () => {
  let page: DeploytestPage;

  beforeEach(() => {
    page = new DeploytestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
