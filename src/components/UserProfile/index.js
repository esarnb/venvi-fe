import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import './style.css';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100,
  },
});

export default function UserProfile(props){
    
  const classes = useStyles();
    
  return (
    <div>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="user" src="https://t7.rbxcdn.com/ea25dd4a7e620f87b1671122f7471ae4" className={classes.bigAvatar} />
    </Grid>
    <h2> Welcome back, {props.userid}! </h2>
    <span id="line"> </span>
  </div>
  );
}
