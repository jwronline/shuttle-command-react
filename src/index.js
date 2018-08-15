import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Status } from './components/Status';
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

class App extends React.Component {
  state = {
    ...defaultState,
    logs: [],
  };

  onInput = e => {
    e.persist();
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

  onSumbit = e => {
    e.preventDefault();
    this.setState(applyCommand);
  };

  render() {
    const { command, logs, POS, OPS, ITEM } = this.state;
    return (
      <main>
        <Status POS={POS} OPS={OPS} ITEM={ITEM} />
        <pre>{logs.map((log, i) => <div key={i}>{log}</div>)}</pre>
        <form onSubmit={this.onSumbit}>
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
