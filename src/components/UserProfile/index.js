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
  let imgsrc;
  const classes = useStyles();
  if (props.photo) imgsrc = props.photo;
  else imgsrc = "https://i.stack.imgur.com/34AD2.jpg";

  return (
    <div>
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Google Profile Picture" src={imgsrc} className={classes.bigAvatar} />
    </Grid>
    <h2> Welcome back, {props.userid}! </h2>
    <span id="line"> </span>
  </div>
  );
}
