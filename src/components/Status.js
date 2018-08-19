import React, { Component } from 'react';
import data from '../data';
import { CurrentDate } from './';
import './Status.css';

const posToString = pos => (pos ? data[pos].name : 'NONE');

export class Status extends Component {
  render() {
    const { POS, OPS, language, onChangeLanguage } = this.props;
    const { DATE } = data.shared[language];
    return (
      <div className="Status">
        POS: {posToString(POS)} | OPS: {OPS || 'NONE'} | {DATE}: <CurrentDate />
        <select onChange={e => onChangeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="nl">NL</option>
        </select>
      </div>
    );
  }
}
