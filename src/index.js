import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import PostDetails from './pages/PostDetails';
import UserDetails from './pages/userDetail.js/UserDetails';

const Root = () => (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/post/:id/" component={PostDetails} />
      <Route path="/profile/:id/" component={UserDetails} />
    </Switch>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Root />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

