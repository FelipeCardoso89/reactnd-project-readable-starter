import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home";
import Detail from "./screens/Detail";
import Add from "./screens/Add";
import Categories from "./screens/Categories";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import "./index.css";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/post/detail" exact={true} component={Detail} />
        <Route path="/post/add" exact={true} component={Detail} />
        <Route path="/categories" exact={true} component={Categories} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
