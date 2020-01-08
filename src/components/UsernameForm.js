import React, { Component } from "react";

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  onChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <h2 style={{ marginBottom: "5%" }}>Welcome to my Allchat! </h2>
          <h3 style={{ marginBottom: "1%" }}>Please enter your usename</h3>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Enter Your Username"
              onChange={this.onChange}
            />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default UsernameForm;
