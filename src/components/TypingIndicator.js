import React, { Component } from "react";

class TypingIndicator extends Component {
  render() {
    if (this.props.usersWhoAreTyping.length > 0) {
      return (
        <div>
          {`${this.props.usersWhoAreTyping
            .slice(0, 2)
            .join(" and ")} is typing`}
        </div>
      );
    } else {
      return (
        <div style={{ padding: 5 }}>
          <text style={{ fontStyle: "italic", fontSize: "small" }}>
            Nobody is typing
          </text>
        </div>
      );
    }
  }
}

export default TypingIndicator;
