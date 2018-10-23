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

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      const { match, getPost, getComments } = this.props;
      this.props.match.params.post && getComments(this.props.match.params.post)
      this.props.match.params.post && getPost(this.props.match.params.post)
  }

  render() {
    const { classes, post, comments, history } = this.props
    const { deleteComment } = this.props
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Detalhes da Postagem
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
        {post && (
          <Post
            key={post.id}
            {...post}
            onEdit={() => {
              history.push(`/post/detail/${post.id}`, { editing: true });
            }}
            onDelete={() => {
              this.props.deletePost(post)
              window.location.reload();                     
            }}
          />
        )}
        {comments && comments.map(comment => <Comment comment={comment} onDelete={(commentId) => { deleteComment(commentId)}} />)}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Detail);
