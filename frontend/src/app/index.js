import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
  const { isAuthenticated } = this.state;

  const childProps = {
    isAuthenticated,
    history,
    setAuthenticated: this.setAuthenticated,
  };
  return (
    <Router history={history}>
      <div className="content">
        <nav>{isAuthenticated && <button type="button" onClick={this.handleLogout}>Log out</button> }</nav>
        <Switch>
          <Route exact path="/" render={() => (isAuthenticated ? <HomePage {...childProps} /> : <LoginPage {...childProps} />)} />
          <Route path="/login" render={() => <LoginPage {...childProps} />} />
          <Route path="/register" render={() => <RegisterPage {...childProps} />} />
          <Route path="/*" render={() => <div>Page not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}
}

export default App;
