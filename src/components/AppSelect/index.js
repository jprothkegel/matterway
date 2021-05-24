import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { useAppSelectStyles } from './styles';

const AppSelect = ({ ...props }) => {
  const { fields, onData } = props;
  const labelRef = useRef();
  const labelWidth = labelRef.current ? labelRef.current.clientWidth : 0;
  const classes = useAppSelectStyles();
  const [genre, setGenre] = useState('');

  const handleChange = (e) => {
    setGenre(e.target.value);
    onData(e.target.value);
  };

  return (
    <React.Fragment>
      <FormControl variant="outlined" className={classes.container}>
        <InputLabel ref={labelRef}>Select a Book Genre</InputLabel>
        <Select
          data-cy="select"
          value={genre}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          {fields.map((field, index) => (
            <MenuItem key={index} value={field.value}>
              {field.title}{' '}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

AppSelect.propTypes = {
  fields: PropTypes.array,
  onData: PropTypes.func,
};

export default AppSelect;
