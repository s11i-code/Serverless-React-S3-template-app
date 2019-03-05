import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  static propTypes={
    setAuthenticated: PropTypes.func.isRequired,
  }

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { setAuthenticated } = this.props;

    try {
      await Auth.signIn(email, password);
      setAuthenticated(true);
    } catch (e) {
      // e.g wrong password or email
      console.log(e);
      alert(e.message);
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>Please Log in</h1>
          <input name="email" type="email" value={email} onChange={this.handleChange} />
          <input name="password" type="password" value={password} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
        <p>
          No account yet? Register &nbsp;
          <Link to="register">here</Link>
          .
        </p>
      </>
    );
  }
}

export default LoginPage;
