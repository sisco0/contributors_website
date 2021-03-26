import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Tabs,Tab} from '@material-ui/core';
import 'fontsource-roboto';

const StyledTabs = withStyles({
  root: {
    width: '100%',
    backgroundColor:'#f4f4f4',
  },
  indicator: {
    display: 'none',
  },
  centered: {
    alignItems: 'center',
    justify: 'flex-end',
  },
  flexContainer: {
    justifyContent:'flex-end',
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'block',
    borderRadius: '30px',
    textAlign: 'center',
    textTransform: 'none',
    transition: 'all .5s',
    padding: '0.5em 0.75em',
    color: '#1c2557',
    height: 'auto',
    opacity: '1',
    margin: '0.5em 0.5em',
    float: 'none',
    '& + button': {
      margin: '0.5em 0.5em',
    },
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#d03959',
      },
    },
  },
  selected: {},
  wrapper: {
    lineHeight: '24px',
    fontSize: '16px',
    fontWeight: '400',
    position: 'relative',
    fontFamily: 'roboto',
    display: 'block',
    color: 'inherit',
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  demo2: {
    backgroundColor: '#fff',
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo2}>
        <StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">

          <StyledTab label="Home" />
          <StyledTab label="About Us" />
          <StyledTab label="Join our team" />

        </StyledTabs>
      </div>
    </div>
  );
}
