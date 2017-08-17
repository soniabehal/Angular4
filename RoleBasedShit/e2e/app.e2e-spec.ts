import { RoleBasedShitPage } from './app.po';

describe('role-based-shit App', () => {
  let page: RoleBasedShitPage;

  beforeEach(() => {
    page = new RoleBasedShitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
