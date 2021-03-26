import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button} from '@material-ui/core';
import CustomButton from './CustomButton';
import Oss from '../images/oss.png';
import Image from 'material-ui-image';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#ececec',
  },

  textDiv:{
    padding: '15em 5em',
    color: '#1c2557',

  }
}));

export default function OssComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
        <div className={classes.textDiv}>
        <h1>Open Source Programs!</h1>
        <p> moja global routinely participates in Open Source Programs like the Google Summer Of Code, Google Season Of Docs and  Linux Mentorship programs etc. As a contributor, you may also suggest other programs for moja global to participate in. If we are eligible, we will definitely consider to apply for these programs to support you.
        To know more about our selection process</p>
        <CustomButton variant="contained" color="primary" disableElevation>
        <Link color='inherit' underline='none' href="https://moja-global-documentation.readthedocs.io/en/latest/contact.html#outreach-and-student-programs">
          Click Here
        </Link>
        </CustomButton>
        </div>
        </Grid>
        <Grid item xs={12} md={6} >
          <Image className={classes.root}
            src={Oss}
            disableSpinner
          />
        </Grid>
      </Grid>
    </div>
  );
}
