import React from 'react';
import s from './test.module.css';
import Controls from './Controls';
import Value from './value';

class Counter extends React.Component {
  static defaultProps = {
    initValue: 666,
  };
  state = {
    value: this.props.initValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className={s.counter}>
        <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
