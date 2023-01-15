import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-m m-2"
          >
            +
          </button>
          <button
            className={
              this.props.counter.value !== 0
                ? "btn btn-secondary btn-m m-2"
                : "btn btn-secondary btn-m m-2 disabled"
            }
            onClick={() => this.props.onDecrement(this.props.counter)}
          >
            -
          </button>
          <button
            onClick={() => this.props.onReset(this.props.counter)}
            className="btn btn-secondary btn-m m-2"
          >
            ↻
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-m m-2"
          >
            X
          </button>
          {/* {console.log(this.props)} */}
          {/* {this.renderTags()} */}
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2  btn-m badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = { ...this.props.counter };
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
