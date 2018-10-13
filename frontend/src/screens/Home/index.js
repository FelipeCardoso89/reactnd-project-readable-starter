import React, { Component } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Post from "../../components/Post";
import { Container, PostsContainer } from "./styles";

const styles = theme => ({
  button: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    };
  }

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    console.log("Categories", this.props);
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Leitura
            </Typography>
          </Toolbar>
        </AppBar>
        <Container>
          <PostsContainer>
            {(this.props.posts &&
              this.props.posts.length !== 0 &&
              this.props.posts.map(post => (
                <Post key={post.id} {...post} />
              ))) || (
              <Typography variant="title" color="inherit">
                Sem postagens
              </Typography>
            )}
          </PostsContainer>
        </Container>
        <Button
          variant="extendedFab"
          color="primary"
          aria-label="Add"
          className={classes.button}
          onClick={() => {
            console.log("clicked");
          }}
        >
          <AddIcon className={classes.extendedIcon} />
          Adicionar
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
