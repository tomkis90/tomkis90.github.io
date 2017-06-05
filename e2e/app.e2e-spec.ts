import { AnProjectPage } from './app.po';

describe('an-project App', () => {
  let page: AnProjectPage;

  beforeEach(() => {
    page = new AnProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
