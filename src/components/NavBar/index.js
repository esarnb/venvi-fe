import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { Tab } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import './style.css';
import * as API from "../../utils/API";
import { Link } from "react-router-dom";


const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    "& > div": {
      maxWidth: 80,
      width: "80%",
      backgroundColor: "gold",
      height: 1
    }
  }
})(style => <Tabs {...style} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "white",
    paddingBottom: 0,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(0),
    "&:focus": {
      opacity: 1
    }
  }
}))(style => <Tab disableRipple {...style} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(0)
  },
  bgcolor: {
    backgroundColor: "black"
  }
}));

function NavBar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root} id="navbarSection">
      <div id="logo">
        <Typography className={classes.padding} />
      </div>
      <div className={classes.bgcolor} id="NavBar">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs"
        >
          <Link to="/"><StyledTab label="Home" className="navTab"/></Link>
          <Link to="/search"><StyledTab label="Search" className="navTab"/></Link>
          <Link to="/testdrive"><StyledTab label="TestDrive" className="navTab"/></Link>

          {props.username ? (
              [<Link to="/market"><StyledTab label="Market" className="navTab"/></Link>,
              <Link to="/profile"><StyledTab label="Profile" className="navTab"/></Link>]
          ): []}
           
          {/* <React.Fragment>
            [1] Welcome, {(props && props["username"] && props.username) ? props.username: "Guest"}
          </React.Fragment> */}
          
          {props.username ? (
            <button onClick={() => (API.Auth.logout().then(() => window.location.href="/"))} id ="signOut" className="signOut" style={{float: "right"}} >Sign Out</button>
          ) : (
            <button onClick={() => API.Auth.login()} id ="signIn" className="signIn" style={{float: "right"}} href="#">Sign In</button>
          )}
          </StyledTabs>

        <Typography className={classes.padding} />
      </div>

    </div>
  );
}


export default NavBar;