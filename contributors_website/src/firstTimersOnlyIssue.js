import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List,ListItem,Divider,ListItemText,ListItemAvatar,Avatar,Typography,Grid} from '@material-ui/core';
import 'cross-fetch/polyfill';
import ApolloClient, { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import {Card,CardActionArea,CardActions,CardContent,CardMedia,Button} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const repos = {names: ['GCBM.Visualisation_Tool', 'FLINT', 'FLINT.example', 'FLINT.Data_Preprocessing', 'GSoC.FLINT.Refactoring_Core_Code']}

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
  dropdown:{
    padding:'2em',
  },
}));

const GET_LABELLED_ISSUES = gql`
query ($repo: String!){
  repository(owner: "moja-global", name: $repo) {
    issues(orderBy: {field: CREATED_AT, direction: DESC},first:100,states:OPEN, labels:["good first issue"]) {
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


  function GetIssues(props){
    const classes = useStyles();
    const {
    repo: [repo, setRepo]} = {repo: useState('GCBM.Visualisation_Tool'),...(props.state || {})};
    console.log({repo});
    const { loading, error, data } = useQuery(GET_LABELLED_ISSUES, {
      variables: { repo: repo},
    });
    //const { loading, error, data } = useQuery(GET_LABELLED_ISSUES, {variables: {state.name} ,});
    console.log(data);

    if (loading) return <p>Loading...</p>;
    console.log(error);
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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function FirstTimersOnlyIssue() {
  const classes = useStyles();
  const [repo, setRepo] = React.useState('GCBM.Visualisation_Tool');
  const handleChange = (event) => {
    const name = event.target.name;
    setRepo(event.target.value);
    console.log(repo);
  };

  return (
    <Grid container className={classes.root}>
    <Grid xs={12}>
    <h1> Beginner Friendly Issue List </h1>
    <p> Beginner friendly issues to make your first contribution! Reserved for new contributors</p>
    </Grid>
    <Grid xs={6} md={3} className={classes.dropdown}>
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">Repository</InputLabel>
        <Select
          native
          value={repo}
          onChange={handleChange}
          label="Repository"
          inputProps={{
            name: 'repository',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {repos.names.map((item, index) => (
          <option value={item}>{item}</option>
          ))};
        </Select>
        <FormHelperText>Select repository</FormHelperText>
    </FormControl>
    </Grid>
    <Grid xs={12} md={6}>
    <Card className={classes.card}>
  <CardContent>
    <List className={classes.list}>
      <GetIssues state={{repo: [repo, setRepo]}}/>
    </List>
    </CardContent>
    </Card>
    </Grid>
    </Grid>
  );
}
