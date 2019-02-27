import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import { RESOURCES_URL } from '../utils/urls';
import HomePage from './pages/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    fetch(RESOURCES_URL, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

    })
      .then(res => res.json())
      .then((resources) => {
        this.setState({ resources });
      });
  }

  render() {
    const { resources } = this.state;
    console.log(resources);
    return (
      <BrowserRouter>
        <div className="content">


          <Route path="/" render={() => <HomePage resources={resources || []} />} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
