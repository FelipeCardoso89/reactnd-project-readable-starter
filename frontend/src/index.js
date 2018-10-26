import React from "react";
import ReactDOM from "react-dom";
import Home from "./containers/Home";
import Detail from "./containers/Detail";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from "./redux/store";
import "./index.css";

const App = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/:category" exact={true} component={Home} />
        <Route path="/post/detail/:post" exact={true} component={Detail} />
      </Switch>
    </BrowserRouter> 
  </Provider>
);

ReactDOM.render(<App store={store} />, document.getElementById("root"));
