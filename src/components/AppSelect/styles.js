import { makeStyles } from "@material-ui/core/styles";

export const useAppSelectStyles = makeStyles(() => ({
  container: {
    width: "80%",
    "& .MuiOutlinedInput-root": {
      borderRadius: 50,
    },
  },
}));
