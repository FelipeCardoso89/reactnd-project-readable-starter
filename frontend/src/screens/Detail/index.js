import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Container } from './styles'
import Post from "../../components/Post";
import Comment from "../../components/Comment";

const styles = theme => ({});

const drawerWidth = 240;

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return <div> DETALHES </div>
  }
}

export default withStyles(styles)(Detail);
