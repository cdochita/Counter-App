import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onDecrement,
      onDelete,
      onIncrement,
      onReset,
      onResetAll,
      counters,
      counter,
    } = this.props;
    return (
      <div>
        <button onClick={onResetAll} className="btn btn-primary btn-sm m-2">
          Reset All Counters
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            value={counter.value}
            id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
          >
            <h4>Counter #{counter.id} </h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
