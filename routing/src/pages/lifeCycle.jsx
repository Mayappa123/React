import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("component mounted successfully");
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div>
        <p>learn about react life cycle methods...</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.increment()}>click me</button>
      </div>
    );
  }
}

export default LifeCycle;
