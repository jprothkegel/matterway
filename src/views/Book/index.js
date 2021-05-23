import React from "react";
import { Box, CircularProgress } from "@material-ui/core";
import SuccessBook from "./SuccessBook";
import { useSelector } from "react-redux";

const Book = () => {
  const { fetchStatus, bookName, bookImage } = useSelector(
    (state) => state.bookReducer
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="50px"
    >
      {fetchStatus === "loading" && <CircularProgress size={80} />}
      {fetchStatus === "succeded" && (
        <SuccessBook bookImage={bookImage} bookName={bookName} />
      )}
    </Box>
  );
};

export default Book;
