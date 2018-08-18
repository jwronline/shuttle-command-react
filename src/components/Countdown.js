// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

export class Countdown extends Component {
  state = {
    countdown: this.props.from,
  };

  componentDidMount() {
    this.intervalId = setInterval(
      () =>
        this.setState(({ countdown }) => {
          if (countdown === 1) {
            clearInterval(this.intervalId);
          }
          return {
            countdown: countdown - 1,
          };
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { countdown } = this.state;
    const { children = null } = this.props;
    return <>{countdown > 0 ? countdown : children}</>;
  }
}
