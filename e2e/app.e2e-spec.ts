import { AngularPlaygroundPage } from './app.po';

describe('angular-playground App', () => {
  let page: AngularPlaygroundPage;

  beforeEach(() => {
    page = new AngularPlaygroundPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
