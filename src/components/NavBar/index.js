import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import { Tab } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import './style.css';



const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid black"
  },
  indicator: {
    backgroundColor: "#red"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "green",
      opacity: 1
    },
    "&$selected": {
      color: "white",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "green"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > div": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "gold"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
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

function NavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <Typography className={classes.padding} />
      </div>
      <div className={classes.demo2} id="NavBar">
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <div>Hi</div>
          <StyledTab label="Chloe" className="navTab"/>
          <StyledTab label="Supreme" className="navTab"/>
          <StyledTab label="Leader" className="navTab"/>
          <StyledTab label="Sign In" id = "signIn"/>
        </StyledTabs>

        <Typography className={classes.padding} />
      </div>

    </div>
  );
}


export default NavBar;