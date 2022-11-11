import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "January, 10, 2030" };
  }
  render() {
    return (
      <div className="App">
        <div className="App-title">{this.props.text}: {this.props.name} {this.props.deadlinetext}</div>
        <Clock deadline={this.props.deadline} />
      </div>
    );
  }
}
export default App;