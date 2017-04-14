import React from "react";
import {Router, Route, IndexRoute} from "react-router";
import {history} from "./store.js";
import App from './containers/app';


const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

export {router};
