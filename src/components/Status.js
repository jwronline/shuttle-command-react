import React, { Component } from 'react';
import data from '../data';

const posToString = pos => (pos ? data[pos].name : 'NONE');

const isoDate = date =>
  new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .replace(/\.\d{3}Z/, '')
    .replace('T', ' ');

export class Status extends Component {
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
    const { POS, OPS, language, onChangeLanguage } = this.props;
    const { DATE } = data.shared[language];
    const { date } = this.state;
    return (
      <div
        style={{
          borderBottom: '.2em solid white',
          paddingBottom: '.2em',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        POS: {posToString(POS)} | OPS: {OPS || 'NONE'} | {DATE}: {date}
        <select onChange={e => onChangeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="nl">NL</option>
        </select>
      </div>
    );
  }
}
