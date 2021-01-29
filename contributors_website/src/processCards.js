import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography,Grid} from '@material-ui/core';
import CustomButton from './components/CustomButton'
import Help from './images/help_others.png'
import Issue from './images/solve_issue.jpg'
import Team from './images/teamwork.jpg'
import Link from '@material-ui/core/Link';

const CustomCard = withStyles({
  root: {
    margin:'3em',
  },
})(Card);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight:450,
  },
  media: {
    height: 200,
  },
  heading:{
    padding:'0em 3em',
    paddingTop:'5em',
  },
  grid:{
    paddingBottom:'3em',
  }
});

export default function ProcessCards() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12} className={classes.heading}>
      <h1>How to start contributing?</h1>
      </Grid>

      <Grid item xs={12} md={4}>
    <CustomCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Issue}
          title="Solve issue"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Take up a first-timers-only issue
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Beginner-friendly issues are designed to help new contributors to contribute to the Codebase.
            You can find them under issues in Github labelled as good first issue.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link color='inherit' underline='none' href="https://moja-global-documentation.readthedocs.io/en/latest/DevelopmentSetup/git_and_github_guide.html#claim-an-issue">
          Learn More
        </Link>
        </Button>
      </CardActions>
    </CustomCard>
    </Grid>
    <Grid item xs={12} md={4}>
    <CustomCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Help}
          title="Help Others"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Help others take their first step!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Now that you have made your first contribution, it is time to help other contributors to start their journey too.
            Answer their queries on Slack or review their pull requests.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link color='inherit' underline='none' href="https://moja-global-documentation.readthedocs.io/en/latest/contributing/after_contribute.html#help-other-contributors-take-their-first-step">
          Learn More
        </Link>
        </Button>
      </CardActions>
    </CustomCard>
    </Grid>
    <Grid item xs={12} md={4}>
    <CustomCard className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Team}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Create a Beginner-friendly issue for someone else!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Using our Beginner-friendly issue template, create a welcoming issue for others.
            We need more helping hands on our journey to help the environment!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <Link color='inherit' underline='none' href="https://moja-global-documentation.readthedocs.io/en/latest/contributing/after_contribute.html#create-beginner-friendly-issues">
          Learn More
        </Link>
        </Button>
      </CardActions>
    </CustomCard>
    </Grid>
    </Grid>
  );
}
