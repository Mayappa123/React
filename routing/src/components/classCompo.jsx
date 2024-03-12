import React from "react";

class ClassCompo extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState(
      () => ({
        count: this.state.count + 1,
      }),
      () => console.log("count is", this.state.count)
    );
  }

  render() {
    return (
      <>
        <p>Hello I am class component...</p>
        <button
          onClick={() => this.increment()}
          style={{
            backgroundColor: "black",
            color: "white",
            height: "35px",
            width: "100px",
            borderRadius: "15px",
          }}
        >
          Click me
        </button>
        <p>count : {this.state.count}</p>
      </>
    );
  }
}

export default ClassCompo;
