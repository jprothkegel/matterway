import { callGetBook } from "../services/bookService";
import { Response } from "express";
import { htmlParser } from "../helpers/htmlParser";

interface Request {
  body: {
    genre: string;
  };
}

export const getBook = async (req: Request, res: Response) => {
  try {
    const genre: string = req.body.genre;
    const response = await callGetBook(genre);

    const bookData = htmlParser(response.data);

    res.status(200).json({
      message: "All good",
      data: bookData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
};
