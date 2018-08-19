// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export class Stagger extends Component {
  state = {
    value: this.props.from,
  };

  componentDidMount() {
    const { delay = 1000, to, step } = this.props;
    this.intervalId = setInterval(
      () =>
        this.setState(({ value }) => {
          if (value - step < to) {
            clearInterval(this.intervalId);
            return {
              value: to,
            };
          }
          return {
            value: value - step,
          };
        }),
      delay
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { value } = this.state;
    const { children = null } = this.props;

    return children({ value });
  }
}
