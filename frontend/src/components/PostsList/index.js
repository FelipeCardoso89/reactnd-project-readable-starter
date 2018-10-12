import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { PostsListContainer, PostsListActionsContainer } from "./styles";

const Selector = ({ open, options, toogle }) => {
  return (
    <ButtonDropdown isOpen={open} toggle={toogle}>
      <Button id="caret" color="primary">
        {`REACT`}
      </Button>
      <DropdownToggle caret color="primary" />
      {options && (
        <DropdownMenu>
          {options.map((option, index) => (
            <DropdownItem key={option.name || `${index}`}>
              {option.name || option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </ButtonDropdown>
  );
};

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryOpen: false,
      sortOpen: false,
      currentCategory: null,
      currentSort: null
    };
  }

  render() {
    return (
      <PostsListContainer>
        <PostsListActionsContainer>
          <div>
            Categoria:
            <Selector
              open={this.state.categoryOpen}
              options={this.props.categories || []}
              toogle={() => {
                this.setState({
                  categoryOpen: !this.state.categoryOpen
                });
              }}
            />
          </div>
          <div>
            Ordernado por:
            <Selector
              open={this.state.sortOpen}
              options={["Data de publicação", "Mais votados"]}
              toogle={() => {
                this.setState({
                  sortOpen: !this.state.sortOpen
                });
              }}
            />
          </div>
        </PostsListActionsContainer>
        {this.props.children}
      </PostsListContainer>
    );
  }
}

export default PostsList;
