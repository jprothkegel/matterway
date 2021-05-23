import { makeStyles } from "@material-ui/core/styles";

export const useSearchStyles = makeStyles(() => ({
  title: {
    fontSize: 26,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 35,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: 50,
    alignItems: "center",
    marginTop: "15%",
  },
}));
