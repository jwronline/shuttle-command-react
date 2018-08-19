import React, { Component } from 'react';
import './Input.css';

const turnIntoCommand = input =>
  input
    .replace('+', 'HELP')
    .replace('-', 'POS')
    .replace('/', 'ITEM')
    .replace('*', 'OPS')
    .toUpperCase();

const help = ['[+]', 'HELP'].join('|');
const modes = ['-', 'POS', '[/]', 'ITEM', '[*]', 'OPS'].join('|');
const inputPattern = `^(${help})|((${modes})\\d{3})$`;

export class Input extends Component {
  state = { command: '' };
  onInput = e => {
    const input = e.target;

    if (input.validity.patternMismatch) {
      input.setCustomValidity(
        'Expected "OPS", "POS", "ITEM" or "HELP" followed by three numbers'
      );
    } else {
      input.setCustomValidity('');
    }

    this.setState({
      command: turnIntoCommand(input.value),
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onCommand(this.state.command);
    this.setState({ command: '' });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="Input"
          type="text"
          pattern={inputPattern}
          value={this.state.command}
          onChange={this.onInput}
          required
        />
      </form>
    );
  }
}
