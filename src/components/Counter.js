import React from "react";
import { connect } from "react-redux";

const Counter = ({ onIncrement, onDecrement, value }) => (
  <React.Fragment>
    <button onClick={onIncrement}>+</button>
    {value}
    <button onClick={onDecrement}>-</button>
  </React.Fragment>
);

const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch({ type: "INCREMENT" }),
  onDecrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
