import { RandomservicePage } from './app.po';

describe('randomservice App', () => {
  let page: RandomservicePage;

  beforeEach(() => {
    page = new RandomservicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
