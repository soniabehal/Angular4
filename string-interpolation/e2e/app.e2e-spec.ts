import { StringInterpolationPage } from './app.po';

describe('string-interpolation App', function() {
  let page: StringInterpolationPage;

  beforeEach(() => {
    page = new StringInterpolationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
