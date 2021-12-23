import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      msg: ""
    };
  }

  renderMessage() {
    let msg;
    if (this.state.msg !== "") {
      msg = <p>{this.state.msg}</p>;
    } else {
      msg = "";
    }

    return msg;
  }

  onTextChange(name) {
    this.setState({ name });
  }

  onButtonClick() {
    const nameLen = this.state.name.length;
    if (nameLen > 0) {
      this.setState({
        msg: `Your name is: ${this.state.name}, \
              and has ${nameLen} characters including space`
      });
    }
  }

  onResetClick() {
    this.setState({ name: "", msg: "" });
  }

  render() {
    return (
      //do something here where there is a button that will replace the text
      <div>
        <label>Your name </label>
        <input
          value={this.state.name}
          onChange={event => this.onTextChange(event.target.value)}
        />
        <button onClick={this.onButtonClick.bind(this)}>
          Calculate Name Length
        </button>
        <button onClick={this.onResetClick.bind(this)}>
          Reset All
        </button>
        <hr />
        {this.renderMessage()}
      </div>
    );
  }
}

export default App;
