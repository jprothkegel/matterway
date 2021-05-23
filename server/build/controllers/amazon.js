'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.openAmazon = void 0;
const puppeteer_1 = __importDefault(require('puppeteer'));
const amazonParser_1 = require('../helpers/amazonParser');
const openAmazon = async (req, res) => {
  try {
    const { name, amazonUsername, amazonPassword } = req.body;
    const browser = await puppeteer_1.default.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720,
    });
    await page.goto(amazonParser_1.amazonParser(name));
    await page.click('.s-image');
    const [span] = await page.$x("//span[contains(., 'Paperback')]");
    if (span) {
      await span.click();
    }
    await page.waitForSelector('#add-to-cart-button');
    await page.click('#add-to-cart-button');
    await page.waitForSelector('#hlb-ptc-btn-native');
    await page.click('#hlb-ptc-btn-native');
    await page.waitForSelector('#ap_email');
    await page.type('#ap_email', amazonUsername);
    await page.waitForSelector('#continue');
    await page.click('#continue');
    await page.waitForSelector('#ap_password');
    await page.type('#ap_password', amazonPassword);
    await page.waitForSelector('#signInSubmit');
    await page.click('#signInSubmit');
    res.status(200).json({ msg: 'Amazon loaded correctly' });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ msg: 'Something went wrong' });
  }
};
exports.openAmazon = openAmazon;
