import React from "react";
import { Typography, Box, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { openAmazon } from "../../redux/actions/amazonActions";
import { HOME_ROUTE } from "../../constants/routes";
import LaunchIcon from "@material-ui/icons/Launch";
import { useSuccessBookStyles } from "./styles";

const SuccessBook = ({ ...props }) => {
  const { bookName, bookImage } = props;
  const classes = useSuccessBookStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAmazonClick = () => {
    dispatch(openAmazon(bookName));
  };

  const handleReturnClick = () => {
    history.push(HOME_ROUTE);
  };

  return (
    <React.Fragment>
      <img src={bookImage} className={classes.image} />
      <Typography className={classes.title}>{bookName}</Typography>
      <Box display="flex" flexDirection="column">
        <Button
          className={`${classes.button} ${classes.amazonButton}`}
          variant="contained"
          color="primary"
          endIcon={<LaunchIcon />}
          onClick={handleAmazonClick}
        >
          Buy it on Amazon
        </Button>
        <Button variant="contained" color="primary" onClick={handleReturnClick}>
          Change genre
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default SuccessBook;
