export type Post = {
  id: string,
  title: string,
  body: string,
  author: string,
  category: string,
  createdAt: date,
}

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any