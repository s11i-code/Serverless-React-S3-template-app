import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

const MESSAGES = {
  success: 'Your account was successfully created. It will become valid after it has been confirmed by an admin. ',
  passwords_unmatched: 'Your passwords do not match.',
};

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      password: '',
      confirmPassword: '',
      showPasswordWarning: false,
      message: undefined,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      return;
    }

    let message;
    try {
      await Auth.signUp({
        username: email,
        password,
      });
      message = { type: 'success', text: MESSAGES.success };
    } catch (e) {
      message = { type: 'error', text: e.message };
    }
    this.setState({ message, loading: false });
  }

  render() {
    const {
      loading, email, password, confirmPassword, showPasswordWarning, message,
    } = this.state;

    const passwordsAreEqualLength = password.length === confirmPassword.length;
    const unmatchedPasswords = passwordsAreEqualLength && password !== confirmPassword;
    return (
      <section>
        <h1>Register</h1>
        {message && <p>{message.text}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            required
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />

          <br />

          <input
            required
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
            type="password"
          />

          <br />

          <input
            required
            name="confirmPassword"
            placeholder="Password confirmation"
            value={confirmPassword}
            onChange={this.handleChange}
            type="password"
          />
          <br />
          {(showPasswordWarning || unmatchedPasswords) && <div>{MESSAGES.passwords_unmatched}</div>}
          <button disabled={loading} type="submit">
          Register &nbsp;
            {loading && <span>Loading</span>}
          </button>
        </form>
      </section>
    );
  }
}
