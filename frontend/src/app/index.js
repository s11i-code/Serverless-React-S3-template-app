import React, { Component } from 'react';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { Auth } from 'aws-amplify';
import './index.css';
import history from '../utils/createBrowserHistory';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  async componentWillMount() {
    this.setState({ loadingAuth: true });
    await this.authenticate();
    this.setState({ loadingAuth: false });
  }

  authenticate = async () => {
    try {
      await Auth.currentSession();
      this.setAuthenticated(true);
    } catch (e) {
      if (e === 'No current user') {
        // user not logged in yet
      } else {
        console.error(e);
      }
    }
  }

  setAuthenticated = (authenticated) => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async () => {
    await Auth.signOut();
    this.setAuthenticated(false);
    history.push('/login');
  }

  render() {
    const { isAuthenticated, loadingAuth } = this.state;

    const childProps = {
      history,
    };

    if (loadingAuth) {
      return <span>Loading</span>;
    }
    return (
      <Router history={history}>
        <div className="content">
          <nav>{isAuthenticated && <button type="button" onClick={this.handleLogout}>Log out</button> }</nav>
          <Switch>
            <Route exact path="/" render={() => (isAuthenticated ? <HomePage {...childProps} /> : <Redirect to="/login" />)} />
            <Route exact path="/login" render={() => (isAuthenticated ? <Redirect to="/" /> : <LoginPage {...childProps} setAuthenticated={this.setAuthenticated} />)} />
            <Route path="/register" render={() => <RegisterPage {...childProps} />} />
            <Route path="/*" render={() => <div>Page not found</div>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
