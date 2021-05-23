import axiosInstance from './Axios';

export const callGetAmazon = (bookName, amazonUsername, amazonPassword) => {
  return axiosInstance({
    url: '/amazon',
    method: 'post',
    data: { name: bookName, amazonUsername, amazonPassword },
  });
};
