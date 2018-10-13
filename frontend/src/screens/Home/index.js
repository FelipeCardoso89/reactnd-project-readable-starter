import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem
} from "@material-ui/core";
import Post from "../../components/Post";
import {
  Container,
  PostsContainer,
  PostsActionContainer,
  ActionContainer
} from "./styles";

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
    console.log("Categories", this.props.categories);
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
            <PostsActionContainer>
              <ActionContainer>
                <Typography>Categoria:</Typography>
                <Select
                  value={this.state.category}
                  onChange={event => {
                    this.setState({ category: event.target.value }, () => {
                      this.props.fetchPosts({ category: this.state.category });
                    });
                  }}
                >
                  <MenuItem value="all">
                    <em>Todos</em>
                  </MenuItem>
                  {this.props.categories &&
                    this.props.categories.map(category => (
                      <MenuItem value={category.path}>{category.name}</MenuItem>
                    ))}
                </Select>
              </ActionContainer>
            </PostsActionContainer>
            {this.props.posts &&
              this.props.posts.map(post => <Post key={post.id} {...post} />)}
          </PostsContainer>
        </Container>
      </div>
    );
  }
}

export default Home;
