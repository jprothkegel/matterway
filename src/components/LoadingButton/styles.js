import { makeStyles } from '@material-ui/core/styles';

export const useLoadingButtonStyles = makeStyles((theme) => ({
  wrapper: {
    margin: `${theme.spacing(1)}px auto`,
    position: 'relative',
  },
  buttonProgress: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -18,
    marginLeft: -12,
  },
}));
