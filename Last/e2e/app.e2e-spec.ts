import { LastPage } from './app.po';

describe('last App', () => {
  let page: LastPage;

  beforeEach(() => {
    page = new LastPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
