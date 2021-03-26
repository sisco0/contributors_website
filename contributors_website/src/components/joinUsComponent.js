import React,{useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Paper,Grid,Button} from '@material-ui/core';
import CustomButton from './CustomButton';
import Join from '../images/join.jpg';
import Image from 'material-ui-image';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#fff',
  },

  textDiv:{
    padding: '8em 5em',
    color: '#1c2557',

  },

  multiline:{
    marginTop: '2em',
  }

}));

export default function JoinUsComponent() {
  const classes = useStyles();
  const [myEmail, setEmail] = useState('')
  const [myMsg, setMsg] = useState('')
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
        alert("Message sent successfully!")
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  const handleMail = () => {
    console.log(myMsg);
    console.log(myEmail);
    const templateId =  process.env.REACT_APP_EMAILJS_TEMPLATEID
    sendFeedback(templateId, {message: myMsg, from_name: myEmail})
  }

  return (
    <div id="joinUsComponent" className={classes.root}>
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
        <CustomButton variant="contained" color="primary"  onClick={handleClickOpen}  disableElevation>
        Join Slack
        </CustomButton>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To get a personalized slack invite to our workspace, please enter your email details and a short message. Our maintainers will get back to you as soon as possible. Thank you!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            value={myEmail}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            className={classes.multiline}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            value={myMsg}
            onChange={(e) => setMsg(e.target.value)}
            defaultValue="Enter your message"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleMail} color="primary">
            Send
          </Button>
        </DialogActions>
        </Dialog>
        </div>
        </Grid>
      </Grid>
    </div>
  );
}
