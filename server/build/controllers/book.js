'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getBook = void 0;
const bookService_1 = require('../services/bookService');
const htmlParser_1 = require('../helpers/htmlParser');
const getBook = async (req, res) => {
  try {
    const genre = req.body.genre;
    const response = await bookService_1.callGetBook(genre);
    const bookData = htmlParser_1.htmlParser(response.data);
    res.status(200).json({
      message: 'All good',
      data: bookData,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Something went wrong!',
    });
  }
};
exports.getBook = getBook;
