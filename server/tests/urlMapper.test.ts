import { urlMapper } from '../helpers/urlMapper';

describe('test urlMapper', () => {
  it('should return the correct url for a genre', () => {
    expect(urlMapper.get('fiction')).toBe(
      'https://www.goodreads.com/choiceawards/best-fiction-books-2020',
    );
  });
});
