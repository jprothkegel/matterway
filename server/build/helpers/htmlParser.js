'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.htmlParser = void 0;
const cheerio_1 = __importDefault(require('cheerio'));
const htmlParser = (html) => {
  const root = cheerio_1.default.load(html);
  const books = root('.pollAnswer__bookLink');
  const randomNumber = Math.floor(Math.random() * books.length);
  const randomNumberString = String(randomNumber);
  const bookSelected = books[randomNumberString].children[0];
  return {
    image: bookSelected.attribs.src,
    title: bookSelected.attribs.title,
  };
};
exports.htmlParser = htmlParser;
