import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }
  addCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  minusCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  render() {
    const date = new Date();
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.minusCount.bind(this)}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.addCount.bind(this)}>+</button>
      </div>
    );
  }
}
export default Counter;
