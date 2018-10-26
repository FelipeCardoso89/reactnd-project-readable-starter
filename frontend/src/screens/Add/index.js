import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Card
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Container } from './styles'
import PostForm from "../../components/PostForm";

const styles = theme => ({});

const drawerWidth = 240;

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (<div> ADICIONAR </div>);
  }
}

export default withStyles(styles)(Add);
