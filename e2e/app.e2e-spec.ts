import { Cv2017Page } from './app.po';

describe('cv2017 App', () => {
  let page: Cv2017Page;

  beforeEach(() => {
    page = new Cv2017Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
