import React from 'react'
import ReactDOM from 'react-dom'
import Home from './screens/Home'
import Detail from './screens/Detail'
import Categories from './screens/Categories'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducer from './redux/reducers'
import './index.css'

const store = createStore(reducer)

const App = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/detail" exact={true} component={Detail} />
                <Route path="/categories" exact={true} component={Categories} />
            </Switch>
        </ BrowserRouter>
    </Provider>
)

ReactDOM.render(<App store={store} />, document.getElementById('root'));