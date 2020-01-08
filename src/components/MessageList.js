import React, { Component } from "react";

export default class MessageList extends Component {
  autoScrollToBottom = () => {
    this.endOfMessages.scrollIntoView({ behavior: "auto" });
  };

  componentDidMount() {
    this.autoScrollToBottom();
  }

  componentDidUpdate() {
    this.autoScrollToBottom();
  }

  render() {
    return (
      <div
        style={{
          ...this.props.style,
          ...styles.container
        }}
      >
        <ul style={styles.ul}>
          {this.props.messages.map((message, index) => (
            <li key={index} style={styles.li}>
              <div>
                <span style={styles.senderUsername}>{message.senderId}</span>{" "}
              </div>
              <p style={styles.message}>{message.text}</p>
            </li>
          ))}
          <div
            style={{ float: "left", clear: "both" }}
            ref={eof => {
              this.endOfMessages = eof;
            }}
          ></div>
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    overflowY: "scroll",
    flex: 1,
    paddingBottom: 1
  },
  ul: {
    listStyle: "none"
  },
  li: {
    paddingTop: 13,
    paddingBottom: 13,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: "dotted",
    marginLeft: 5
  },
  senderUsername: {
    fontWeight: "bold"
  },
  message: { fontSize: 15 }
};
