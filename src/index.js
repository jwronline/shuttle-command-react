import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Status } from './components/Status';
import { Log } from './components/Log';
import { defaultState, applyCommand } from './applyCommand';

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

class App extends Component {
  state = {
    ...defaultState,
    logs: [],
    language: 'en',
  };

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
    this.setState(applyCommand);
  };

  changeLanguage = language =>
    this.setState({
      language,
    });

  render() {
    const { language, command, logs, POS, OPS } = this.state;

    return (
      <main>
        <Status
          POS={POS}
          OPS={OPS}
          onChangeLanguage={this.changeLanguage}
          language={language}
        />
        <Log
          logs={[
            ...Array.from({ length: 100 }, (_, i) => `this is log ${i}`),
            ...logs,
          ]}
        />
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            pattern={inputPattern}
            value={command}
            onChange={this.onInput}
            required
          />
        </form>
      </main>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
