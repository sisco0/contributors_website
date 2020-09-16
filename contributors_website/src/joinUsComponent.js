import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button} from '@material-ui/core';
import CustomButton from './CustomComponents/CustomButton';
import Join from './images/join.jpg';
import Image from 'material-ui-image';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#fff',
  },

  textDiv:{
    padding: '8em 5em',
    color: '#1c2557',

  }
}));

export default function JoinUsComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
      <Grid item xs={12} md={6}>
        <Image
          src={Join}
          disableSpinner
        />
      </Grid>
        <Grid item xs={12} md={6}>
        <div className={classes.textDiv}>
        <h1>Join Us on our journey to help the environment!</h1>
        <p> moja global provides tools for estimating emissions and removals of greenhouse gases from the land sector.
        If you are new here, check out our Github and refer the readme.md file to setup FLINT.
        If you have any query, join our Slack here.  </p>
        <CustomButton variant="contained" color="primary" disableElevation>
        Get Started
        </CustomButton>
        </div>
        </Grid>
      </Grid>
    </div>
  );
}
