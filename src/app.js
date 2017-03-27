import './index.scss'
import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import Home from './components/home'
import PageOne from './components/page_one'
import PageTwo from './components/page_two'

const PropsChildren = props => props.children

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={PropsChildren}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/page-one" component={PageOne}></Route>
            <Route path="/page-two" component={PageTwo}></Route>
        </Route>
    </Router>
)

export default function () {
    return routes
}
