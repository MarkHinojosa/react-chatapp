import React, { Component } from "react";

export default class SendMessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {}

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  }

  onChange(e) {
    this.setState({ text: e.target.value });
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{ display: "flex", marginBottom: "1%" }}
        >
          <input
            type="text"
            placeholder="Type Message Here"
            onChange={this.onChange}
            value={this.state.text}
            style={{ width: "100%", padding: 15 }}
          />
        </form>
      </div>
    );
  }
}
