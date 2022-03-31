import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, Outlet } from 'react-router-dom';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    if (this.state.count <= 0) {
      return (this.setState.count = 0);
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div className="d-flex">
        <NavLink to="countFunc" className="nav-link">
          Counter Function
        </NavLink>
        <br />
        <Outlet />
        <br />
        <Button onClick={this.increment}>Increment</Button>
        <div>Counter: {this.state.count}</div>
        <Button onClick={this.decrement}>Decrement</Button>
      </div>
    );
  }
}
