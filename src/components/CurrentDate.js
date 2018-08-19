import { Component } from 'react';
import { isoDate } from '../utils';

export class CurrentDate extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.intervalId = setInterval(
      () =>
        this.setState({
          date: isoDate(new Date()),
        }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return this.state.date;
  }
}
