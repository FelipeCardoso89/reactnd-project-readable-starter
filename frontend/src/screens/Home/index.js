import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Drawer
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import Post from "../../components/Post";
import { Container, ContentContainer, PostsContainer } from "./styles";

const styles = theme => ({
  button: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

const drawerWidth = 240;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    };
  }

  componentDidMount() {

  }

  render() {
    return <div> HOME </div>
  }
}

export default withStyles(styles)(Home);
