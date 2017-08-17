import { NGMAPPage } from './app.po';

describe('ngmap App', () => {
  let page: NGMAPPage;

  beforeEach(() => {
    page = new NGMAPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
