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

const styles = theme => ({
  card: {
    display: 'flex',
    width: '60%',
    height: '60%'
  }, 
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

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { classes, categories } = this.props
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Adicionar Postagem
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Card className={classes.card}>
            <PostForm categories={categories}/>
          </Card>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Add);
