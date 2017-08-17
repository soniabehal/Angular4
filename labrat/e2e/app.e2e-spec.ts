import { LabratPage } from './app.po';

describe('labrat App', () => {
  let page: LabratPage;

  beforeEach(() => {
    page = new LabratPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
