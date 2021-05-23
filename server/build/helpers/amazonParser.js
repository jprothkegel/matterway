'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.amazonParser = void 0;
const amazonParser = (name) => {
  const newName = name.split(' ').join('+');
  return `https://amazon.com/s?k=${newName}&ref=nb_sb_noss`;
};
exports.amazonParser = amazonParser;
