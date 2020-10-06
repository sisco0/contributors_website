import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid,GridList,GridListTile,GridListTileBar,ListSubheader} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: '#f4f4f4',
    paddingBottom:'4em',
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const GetContributors = () => {
  const classes = useStyles();
  const [hasError, setErrors] = useState(false);
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
       let mounted = true;
       setLoading(true)
       fetch("https://api.github.com/repos/moja-global/FLINT/contributors",
       {headers: { 'Authorization': 'Bearer '+process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN,}})
       .then(res => res.json()).then(
           res => {
             if(mounted && contributors.length == 0){
               setContributors(res.reverse().slice(0,8));
               setLoading(false)
             console.log(contributors);}}
       ).catch(err => {
           setLoading(false)})
      return () => mounted = false;
   }, [contributors])

   return (
     <div className={classes.root}>
     <Grid container>
     <Grid xs={12}>
     <h1> New Contributors List</h1>
     <p> Contribute to Moja Global and get featured in this list!</p>
     </Grid>
     </Grid>
       <GridList cellHeight={160} className={classes.gridList} cols={4}>
         <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
           <ListSubheader component="div">New contributors</ListSubheader>
         </GridListTile>

               {contributors.map( contributor =>  (
                 <GridListTile key={contributor.id} >
                   <img src={contributor.avatar_url} alt={contributor.login} />
                   <GridListTileBar
                     title={contributor.login}
                     subtitle={<span>Contributions: {contributor.contributions}</span>}
                     actionIcon={
                       <IconButton href={contributor.url} aria-label={`info about ${contributor.login}`} className={classes.icon}>
                         <InfoIcon />
                       </IconButton>
                     }

                         />
                       </GridListTile>
                     ))
                   }

       </GridList>
     </div>
   );

      };
export default GetContributors;
