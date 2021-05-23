import axios from "axios";
import { urlMapper } from "../helpers/urlMapper";

export const callGetBook = (genre: string) => {
  return axios({
    method: "get",
    url: urlMapper.get(genre),
  });
};
