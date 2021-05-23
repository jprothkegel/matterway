import React, { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";
import AppSelect from "../../components/AppSelect";
import { useDispatch } from "react-redux";
import { FIELDS } from "../../helpers/fields";
import { useSearchStyles } from "./styles";
import { getBook } from "../../redux/actions/bookActions";
import { useHistory } from "react-router-dom";
import { BOOK_ROUTE } from "../../constants/routes";

const Search = () => {
  const classes = useSearchStyles();
  const [bookGenre, setBookGenre] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

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
    </Box>
  );
};

export default Search;
