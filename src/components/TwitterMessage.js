import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChangeValue = (maxChars, event) => {
    if (event.target.value.length <= maxChars) {
      this.setState({
        message: event.target.value,
        remainingChar: maxChars - event.target.value.length,
      });
    }
  };
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={(event) =>
            this.handleChangeValue(this.props.maxChars, event)
          }
        />
        <span>
          Remaining characters {this.props.maxChars - this.state.message.length}
        </span>
      </div>
    );
  }
}

export default TwitterMessage;
