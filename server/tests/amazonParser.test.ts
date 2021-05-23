import { amazonParser } from '../helpers/amazonParser';

describe('test amazon parser', () => {
  it('should return a valid name', () => {
    expect(amazonParser('Luster by Raven Leilani')).toBe(
      'https://amazon.com/s?k=Luster+by+Raven+Leilani&ref=nb_sb_noss',
    );
  });
});
