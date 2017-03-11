import { Formula1ApiPage } from './app.po';

describe('formula1-api App', function() {
  let page: Formula1ApiPage;

  beforeEach(() => {
    page = new Formula1ApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
