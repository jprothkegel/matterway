'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const htmlExample_1 = require('./htmlExample');
const htmlParser_1 = require('../helpers/htmlParser');
describe('should parse the Html to return a book', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0);
  });
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });
  it('should return the midnight library', () => {
    expect(htmlParser_1.htmlParser(htmlExample_1.html)).toStrictEqual({
      image:
        'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg',
      title: 'The Midnight Library by Matt Haig',
    });
  });
});
