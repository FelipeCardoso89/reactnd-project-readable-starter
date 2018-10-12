import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: green;
  margin: 16px;
`;

export const PostVoteCounterContainer = styled.div`
  display: flex;
  justify-content: center;
  alignt-items: center;
  flex-direction: column;
  background-color: purple;
`;

export const PostActionsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: brown;
`;

export const PostContentContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: blue;
`;

export const PostHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: pink;
`;

export const PostTitleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: yellow;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

export const PostAccessoryContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: cyan;
`;
