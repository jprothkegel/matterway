import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import SuccessBook from './SuccessBook';
import { useSelector, useDispatch } from 'react-redux';
import { resetAmazon } from '../../redux/slices/amazonSlice';
import { useHistory } from 'react-router-dom';
import { HOME_ROUTE } from '../../constants/routes';

const Book = () => {
  const { fetchStatus, bookName, bookImage } = useSelector(
    (state) => state.bookReducer,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(resetAmazon());
  }, []);

  useEffect(() => {
    if (fetchStatus === 'error') history.push(HOME_ROUTE, { fetchStatus });
  }, [fetchStatus]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      {fetchStatus === 'loading' && (
        <Box position="absolute" top="50%" left="50%">
          <CircularProgress size={80} />
        </Box>
      )}
      {fetchStatus === 'succeded' && (
        <SuccessBook bookImage={bookImage} bookName={bookName} />
      )}
    </Box>
  );
};

export default Book;
