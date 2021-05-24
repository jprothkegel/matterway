import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openAmazon } from '../../redux/actions/amazonActions';
import { HOME_ROUTE } from '../../constants/routes';
import LaunchIcon from '@material-ui/icons/Launch';
import { useSuccessBookStyles } from './styles';
import LoadingButton from '../../components/LoadingButton';

const SuccessBook = ({ ...props }) => {
  const { bookName, bookImage } = props;
  const classes = useSuccessBookStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const { status } = useSelector((state) => state.amazonReducer);

  const handleAmazonClick = () => {
    dispatch(openAmazon(bookName));
  };

  const handleReturnClick = () => {
    history.push(HOME_ROUTE);
  };

  return (
    <Box
      position="absolute"
      top="10%"
      border="1px solid #d9d9d9"
      borderRadius="10px"
      padding="32px"
      maxWidth="75%"
    >
      <img src={bookImage} className={classes.image} />
      <Typography className={classes.title}>{bookName}</Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <LoadingButton
          className={`${classes.button} ${classes.amazonButton}`}
          variant="contained"
          color="primary"
          loading={status === 'loading'}
          endIcon={<LaunchIcon />}
          onClick={handleAmazonClick}
          text="Buy it on Amazon"
          name="Amazon"
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleReturnClick}
          data-cy="returnButton"
        >
          Change genre
        </Button>
      </Box>
    </Box>
  );
};

SuccessBook.propTypes = {
  bookImage: PropTypes.string,
  bookName: PropTypes.string,
};

export default SuccessBook;
