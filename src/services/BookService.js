import axiosInstance from "./Axios";

export const callGetBook = (genre) => {
  return axiosInstance({
    url: "/book",
    method: "post",
    data: { genre },
  });
};
