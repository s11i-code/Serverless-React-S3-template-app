import React, { Component } from 'react';
import { API } from 'aws-amplify';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resources: [],
      loading: false,
    };
  }

  async componentWillMount() {
    this.fetchResources();
  }

  fetchResources = async () => {
    this.setState({ loading: true });
    try {
      const resources = await API.get('resources', '/resources', {
      });
      this.setState({ resources });
    } catch (e) {
      console.error('Encountered error while fetching resources ', e);
    }
    this.setState({ loading: false });
  }

  render() {
    const { resources, loading } = this.state;
    if (loading) {
      return <span>Loading</span>;
    }
    return (
      <>
        <h1>React-Serverless-Python app template</h1>
        <p>Here is some mock data fetched from the server:</p>
        <ul>
          {resources.map(resource => (
            <li>{ resource.message }</li>))}
        </ul>
      </>
    );
  }
}
export default HomePage;
