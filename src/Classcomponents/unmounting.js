import React, { Component } from "react";

export default class Unmounting extends Component {
  constructor() {
    super();
    this.state = {
      isChildVisible: true  // Fixed syntax: this.state should be assigned correctly
    };
  }

  childHandler = () => {
    this.setState({
      isChildVisible: !this.state.isChildVisible,
    });
  };

  render() {
    return (
      <div>
        {this.state.isChildVisible ? <Child /> : <h3>No Child Found</h3>}
        <button onClick={this.childHandler}>clickme</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert("I am unmounting"); 
  }

  render() {
    return <div>Unmounting</div>; 
  }
}
