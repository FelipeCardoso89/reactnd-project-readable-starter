import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PostsContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  background-color: green;
  padding: 16px;
`;

export const PostsActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  background-color: orange;
  padding: 16px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;
