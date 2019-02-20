import React, { Component } from 'react';
import './App.css';
import { RESOURCES_URL } from './utils/urls';

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

    return (
      <div className="content">

        <h1>React-Serverless app template</h1>
        <p>Here is some mock data fetched from the server:</p>
        { resources && (
          <ul>
            {resources.map(resource => <li>{ resource.message }</li>)}
          </ul>
        )}

      </div>
    );
  }
}

export default App;
