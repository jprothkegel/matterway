'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.callGetBook = void 0;
const axios_1 = __importDefault(require('axios'));
const urlMapper_1 = require('../helpers/urlMapper');
const callGetBook = (genre) => {
  return axios_1.default({
    method: 'get',
    url: urlMapper_1.urlMapper.get(genre),
  });
};
exports.callGetBook = callGetBook;
