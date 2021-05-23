import puppeteer from "puppeteer";
import { amazonParser } from "../helpers/amazonParser";
import { Request, Response } from "express";

export const openAmazon = async (req: Request, res: Response) => {
  try {
    const name = req.body.name;
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720,
    });
    await page.goto(amazonParser(name));
    await page.click(".s-image");
    await page.waitForSelector("#add-to-cart-button");
    await page.click("#add-to-cart-button");
    await page.waitForSelector("#hlb-ptc-btn-native");
    await page.click("#hlb-ptc-btn-native");
    await page.waitForSelector("#ap_email");
    await page.type("#ap_email", "jpri_1992@hotmail.com");
    await page.waitForSelector("#continue");
    await page.click("#continue");
    await page.waitForSelector("#ap_password");
    await page.type("#ap_password", "Lacatolica10");
    await page.waitForSelector("#signInSubmit");
    await page.click("#signInSubmit");
    res.status(200).json({ msg: "Amazon loaded correctly" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ msg: "Something went wrong" });
  }
};
