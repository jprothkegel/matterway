'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const book_1 = __importDefault(require('./routes/book'));
const amazon_1 = __importDefault(require('./routes/amazon'));
const app = express_1.default();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cors_1.default());
const baseUrl = '/api/v1';
app.use(baseUrl, book_1.default);
app.use(baseUrl, amazon_1.default);
app.listen(3000, () => {
  console.log('The application is listening on port 3000!');
});
