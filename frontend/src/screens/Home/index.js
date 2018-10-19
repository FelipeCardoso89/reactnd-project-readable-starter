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
      category: this.props.match.params.category || "all"
    };
  }

  componentDidMount() {
    const { fetchPosts, fetchCategories } = this.props;
    fetchCategories();
    fetchPosts({ category: this.state.category });
  }

  render() {
    const { classes, match, history, fetchPosts } = this.props;
    if(match.params.category !== this.state.category){
      this.setState({category : match.params.category}, () => {
        fetchPosts({ category: this.state.category });
      });
    }

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Leitura
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <ListItem button component={Link} to={`/`} key={"all"}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={"Todos"} />
            </ListItem>
            {this.props.categories &&
              this.props.categories.map(category => (
                <ListItem
                  button
                  component={Link}
                  to={`/${category.path}`}
                  key={category.path}
                >
                  <ListItemAvatar>
                    <Avatar className={classes.avatar}>
                      <PersonIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={`${category.name}`} />
                </ListItem>
              ))}
          </Drawer>
          <ContentContainer>
            <PostsContainer>
              {(this.props.posts &&
                this.props.posts.length !== 0 &&
                this.props.posts.map(post => (
                  <Post
                    key={post.id}
                    {...post}
                    onEdit={() => {
                      history.push(`/post/detail/${post.id}`, {
                        editing: true
                      });
                    }}
                    onDelete={() => {
                      this.props.deletePost(post)
                      window.location.reload();                     
                    }}
                  />
                ))) || (
                <Typography variant="title" color="inherit">
                  Sem postagens
                </Typography>
              )}
            </PostsContainer>
          </ContentContainer>
        </Container>
        <Button
          variant="extendedFab"
          color="primary"
          aria-label="Add"
          className={classes.button}
          component={Link}
          to={"/post/new"}
        >
          <AddIcon className={classes.extendedIcon} />
          Adicionar
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
