import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Button} from '@material-ui/core';


const CustomButton = withStyles({
  root: {
    boxShadow: 'none',
    color: '#fff',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#d03959',
    borderColor: '#d03959',
    '&:hover': {
      backgroundColor: '#d44c69',
      borderColor: '#d44c69',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#bb3350',
      borderColor: '#bb3350',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default CustomButton;
