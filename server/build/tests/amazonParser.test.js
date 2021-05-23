'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const amazonParser_1 = require('../helpers/amazonParser');
describe('test amazon parser', () => {
  it('should return a valid name', () => {
    expect(amazonParser_1.amazonParser('Luster by Raven Leilani')).toBe(
      'https://amazon.com/s?k=Luster+by+Raven+Leilani&ref=nb_sb_noss',
    );
  });
});
