import axiosInstance from "./Axios";

export const callGetAmazon = (bookName) => {
  return axiosInstance({
    url: "/amazon",
    method: "post",
    data: { name: bookName },
  });
};
