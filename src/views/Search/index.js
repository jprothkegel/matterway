import React, { useEffect, useState } from 'react';
import { Box, Typography, Snackbar } from '@material-ui/core';
import Alert from '../../components/Alert';
import AppSelect from '../../components/AppSelect';
import { useDispatch } from 'react-redux';
import { FIELDS } from '../../helpers/fields';
import { useSearchStyles } from './styles';
import { getBook } from '../../redux/actions/bookActions';
import { useHistory, useLocation } from 'react-router-dom';
import { BOOK_ROUTE } from '../../constants/routes';

const Search = () => {
  const classes = useSearchStyles();
  const [bookGenre, setBookGenre] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onData = (genre) => {
    setBookGenre(genre);
  };

  useEffect(() => {
    if (bookGenre) {
      dispatch(getBook(bookGenre));
      history.push(BOOK_ROUTE);
    }
  }, [bookGenre]);

  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>Matterway Book Selector</Typography>
      <AppSelect fields={FIELDS} onData={onData} />
      <Snackbar
        open={location?.state?.fetchStatus === 'error' || false}
        autoHideDuration={4000}
        data-cy="snackbar"
      >
        <Alert severity="error">Something went wrong. Try again!</Alert>
      </Snackbar>
    </Box>
  );
};

export default Search;
