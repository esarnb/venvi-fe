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
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 80,
      width: "80%",
      backgroundColor: "#DFB400",
      height: 0.8,
    },
     
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
          <StyledTab label="HOME" className="navTab" to="/" component={Link}/>
          <StyledTab label="SEARCH" className="navTab" to="/search" component={Link}/>
          <StyledTab label="TESTDRIVE" className="navTab" to="/testdrive" component={Link}/>

          {props.username ? (
              [<StyledTab label="MARKET" className="navTab" to="/market" component={Link}/>,
              <StyledTab label="PROFILE" className="navTab" to="/profile" component={Link}/>]
          ): []}
           
          {/* <React.Fragment>
            [1] Welcome, {(props && props["username"] && props.username) ? props.username: "Guest"}
          </React.Fragment> */}
          
          {props.username ? (
            <button onClick={() => (API.Auth.logout().then(() => window.location.href="/"))} id ="signOut" className="signOut" style={{float: "right"}} >SIGN OUT</button>
          ) : (
            <button onClick={() => API.Auth.login()} id ="signIn" className="signIn" style={{float: "right"}} href="#">SIGN IN</button>
          )}
          </StyledTabs>

        <Typography className={classes.padding} />
      </div>

    </div>
  );
}


export default NavBar;