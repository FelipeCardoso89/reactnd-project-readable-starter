import React from "react";
import { Button } from "reactstrap";
import timeago from "timeago.js";
import {
  PostContainer,
  PostVoteCounterContainer,
  PostContentContainer,
  PostHeaderContainer,
  PostTitleContainer,
  PostActionsContainer,
  PostAccessoryContainer
} from "./styles";

const PostAccessory = ({ timestamp }) => {
  return (
    <PostAccessoryContainer>{`${timeago().format(
      timestamp
    )}`}</PostAccessoryContainer>
  );
};

const PostTitle = props => {
  const { title } = props;
  return (
    <PostTitleContainer>
      <h2>{`${title}`}</h2>
    </PostTitleContainer>
  );
};

const PostHeader = props => {
  const { title, author, timestamp } = props;
  return (
    <PostHeaderContainer>
      <PostTitle title={title} author={author} />
      <PostAccessory timestamp={timestamp} />
    </PostHeaderContainer>
  );
};

const PostVote = ({ voteScore }) => {
  return (
    <PostVoteCounterContainer>
      <h3>{`${voteScore}`}</h3>
      <h4>VOTOS</h4>
    </PostVoteCounterContainer>
  );
};

const PostContent = ({ title, author, body, timestamp }) => {
  return (
    <PostContentContainer>
      <PostHeader title={title} author={author} timestamp={timestamp} />
      <h6>{`${body}`}</h6>
      <PostActions />
    </PostContentContainer>
  );
};

const PostActions = () => {
  return (
    <PostActionsContainer>
      <Button>Gostei</Button>
      <Button>Não Gostei</Button>
      <Button>Comentários 8</Button>
    </PostActionsContainer>
  );
};

export const Post = props => {
  return (
    <PostContainer>
      <PostVote {...props.post} />
      <PostContent {...props.post} />
    </PostContainer>
  );
};

export default Post;
