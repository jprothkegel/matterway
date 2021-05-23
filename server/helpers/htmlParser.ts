import cheerio from "cheerio";

interface bookData {
  attribs: {
    src: string;
    title: string;
    alt: string;
  };
}

export const htmlParser = (html: string) => {
  const root = cheerio.load(html);
  const books: any = root(".pollAnswer__bookLink");
  const randomNumber: number = Math.floor(Math.random() * books.length);
  const randomNumberString: string = String(randomNumber);
  const bookSelected: bookData = books[randomNumberString].children[0];
  return {
    image: bookSelected.attribs.src,
    title: bookSelected.attribs.title,
  };
};
