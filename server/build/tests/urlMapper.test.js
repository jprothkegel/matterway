'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const urlMapper_1 = require('../helpers/urlMapper');
describe('test urlMapper', () => {
  it('should return the correct url for a genre', () => {
    expect(urlMapper_1.urlMapper.get('fiction')).toBe(
      'https://www.goodreads.com/choiceawards/best-fiction-books-2020',
    );
  });
});
