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
      <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1806/chutimakuanamon180600142/104749457-blossom-sitting-reading-the-powerpuff-girls-illustration.jpg" className={classes.bigAvatar} />
    </Grid>
    <h1> {props.userid} </h1>
    <span id="line"> </span>
  </div>
  );
}
