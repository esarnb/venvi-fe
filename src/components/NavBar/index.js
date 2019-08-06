import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { Tab } from '@material-ui/core';
// import Icon from '@material-ui/core/Icon';
import Typography from "@material-ui/core/Typography";
// import { Link } from "react-router-dom";
import './style.css';
import * as API from "../../utils/API";


/**
 * UNUSED AntTabs AntTab
 */

// const AntTabs = withStyles({
//   root: {
//     borderBottom: "1px solid black"
//   },
//   indicator: {
//     backgroundColor: "#black"
//   }
// })(Tabs);

// const AntTab = withStyles(theme => ({
//   root: {
//     textTransform: "none",
//     minWidth: 72,
//     fontWeight: theme.typography.fontWeightRegular,
//     marginRight: theme.spacing(4),
//     opacity: 1,
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"'
//     ].join(","),
//     "&:hover": {
//       color: "black",
//       opacity: 1
//     },
//     "&$selected": {
//       color: "black",
//       fontWeight: theme.typography.fontWeightHigh
//     },
//     "&:focus": {
//       color: "black",
//     }
//   },
//   selected: {}
// }))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 80,
      width: "100%",
      backgroundColor: "gold",
      height: 1

    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    paddingBottom: 0,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(0),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(0)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  },
  demo2: {
    backgroundColor: "black"
  }
}));

// const goToLogin = () => {
//   UserAPI.login()
// }

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root} id = "navbarSection">
      <div className={classes.demo1} id="logo">
        <Typography className={classes.padding} />
      </div>
      <div className={classes.demo2} id="NavBar">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs"
        >
          <StyledTab label="Home" className="navTab" href="/"/>
          <StyledTab label="Search" className="navTab" href="/search"/>
          <StyledTab label="Market Place" className="navTab" href="/market"/>
          <StyledTab label="Profile" className="navTab" href="/profile"/>
          <StyledTab label="" onClick={() => API.Auth.login()} href="/auth/google/" id ="signIn" className="fas fa-user" style={{float: "right"}}/>
          </StyledTabs>

        <Typography className={classes.padding} />
      </div>

    </div>
  );
}


export default NavBar;