import React from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress } from '@material-ui/core';
import { useLoadingButtonStyles } from './styles';

const LoadingButton = ({ ...props }) => {
  const { loading, text, color, variant, onClick, className, endIcon, name } =
    props;
  const classes = useLoadingButtonStyles();
  return (
    <div className={classes.wrapper}>
      <Button
        data-cy={`button${name}`}
        color={color}
        variant={variant}
        onClick={onClick}
        className={className}
        endIcon={endIcon}
        disabled={loading}
      >
        {text}
      </Button>
      {loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

LoadingButton.propTypes = {
  loading: PropTypes.bool,
  text: PropTypes.string,
  color: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.string,
  className: PropTypes.className,
  endIcon: PropTypes.element,
  name: PropTypes.string,
};

export default LoadingButton;
