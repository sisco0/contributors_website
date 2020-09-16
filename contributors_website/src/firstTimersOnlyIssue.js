import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar,Typography,Grid} from '@material-ui/core';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:'#fff',
    padding: '4em',
    display: 'flex',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  card: {
    height: '500px',
    overflowY: 'scroll',
    overflowX: 'scroll',
    marginBottom: '4em',
  },
  inline: {
    display: 'inline',
  },
}));


const GET_LABELLED_ISSUES = gql`
query {
  repository(owner:"publiclab", name:"plots2") {
    issues(orderBy: {field: CREATED_AT, direction: DESC},first:100,states:OPEN, labels:["first-timers-only"]) {
      edges {
        node {
          title
          url
          createdAt
          number
          author{
            avatarUrl
            login
          }
          labels(first:5) {
            edges {
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
}`
;

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function GetIssues() {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_LABELLED_ISSUES);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.repository.issues.edges.map(({ node }) => (
    <div>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={node.author.login} src={node.author.avatarUrl} />
      </ListItemAvatar>
      <ListItemLink href={node.url}>
      <ListItemText
        primary={node.title}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              #{node.number}
            </Typography>
            " — " {node.createdAt}
          </React.Fragment>
        }
      />
      </ListItemLink>
    </ListItem>
    <Divider variant="inset" component="li" />
    </div>
  ));
}

export default function FirstTimersOnlyIssue() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
    <Grid xs={12}>
    <h1> First Timers Only Issue List </h1>
    <p> First timers only issues to make your first contribution! Reserved for new contributors</p>
    </Grid>
    <Grid xs={12} md={6}>
    <Card className={classes.card}>
  <CardContent>
    <List className={classes.list}>
      <GetIssues/>
    </List>
    </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}
