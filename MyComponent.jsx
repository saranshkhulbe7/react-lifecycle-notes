import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
    console.log('constructor');
  }
  
  UNSAFE_componentWillMount() {
    console.log('UNSAFE_componentWillMount');
  }
  
  componentDidMount() {
    console.log('componentDidMount');
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('UNSAFE_componentWillReceiveProps');
    if (nextProps.someProp !== this.props.someProp) {
      // update state based on new props
      this.setState({ counter: this.state.counter + 1 });
    }
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    // check if state or props have changed
    if (nextProps.someProp !== this.props.someProp || nextState.counter !== this.state.counter) {
      return true; // component should re-render
    }
    return false; // component should not re-render
  }
  
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log('UNSAFE_componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  
  render() {
    console.log('render');
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
