import { makeStyles } from '@material-ui/core';

export const useBookStyles = makeStyles(() => ({
  image: {
    width: 314,
    height: 475,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 25,
  },
  button: {
    marginBottom: 15,
  },
  amazonButton: {
    backgroundColor: '#FF9900',
  },
}));

export const useSuccessBookStyles = makeStyles(() => ({
  image: {
    width: 236,
    height: 357,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 25,
  },
  button: {
    marginBottom: 15,
    width: 200,
    height: 40,
  },
  amazonButton: {
    backgroundColor: '#FF9900',
    '&:hover': {
      backgroundColor: '#FF990099',
    },
  },
}));
