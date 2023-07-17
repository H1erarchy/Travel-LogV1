import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import Cards from './Cards';
import PostPage from './PostPage';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignUpForm} />
        <PrivateRoute path="/home" component={Home} />
        <Route exact path="/" component={Cards} />
        <Route path="/post/:id" component={PostPage} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;