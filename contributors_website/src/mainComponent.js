import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button} from '@material-ui/core';
import Env from './images/environment.jpg';
import Image from 'material-ui-image';
import CustomButton from './CustomComponents/CustomButton';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#f4f4f4',
  },

  textDiv:{
    padding: '8em 5em',
    color: '#1c2557',

  }
}));

export default function MainComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12} md={6}>
        <div className={classes.textDiv}>
        <h1>Moja Global Developer Community</h1>
        <p> Welcome to Moja Global Developer Community! If you are new to the Community, you have come to the right place </p>
        <CustomButton variant="contained" color="primary" disableElevation>
        <Link color='inherit' underline='none' href="#joinUsComponent">
          Get Started
        </Link>
        </CustomButton>
        </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={Env}
            disableSpinner
          />
        </Grid>
      </Grid>
    </div>
  );
}
