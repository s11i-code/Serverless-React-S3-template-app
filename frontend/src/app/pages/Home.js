import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ resources }) => (
  <>
    <h1>React-Serverless app template</h1>
    <p>Here is some mock data fetched from the server:</p>
    { resources && (
      <ul>
        {resources.map(resource => <li>{ resource.message }</li>)}
      </ul>
    )}
  </>
);

HomePage.propTypes = {
  resources: PropTypes.arrayOf(PropTypes.shape({})),
};

HomePage.defaultProps = {
  resources: [],
};
export default HomePage;
