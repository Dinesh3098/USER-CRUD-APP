import { Box, Typography, makeStyles } from "@material-ui/core";
import Home from "../Images/home.jpg";

const useStyles = makeStyles({
  component: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});

const UserHome = () => {
  const classes = useStyles();
  return <img src={Home} className={classes.component} />;
};

export default UserHome;
