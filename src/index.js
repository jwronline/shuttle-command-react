import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Status, Log, Input } from './components';
import { defaultState, applyCommand } from './applyCommand';

class App extends Component {
  state = {
    ...defaultState,
    logs: [],
    language: 'en',
  };

  onCommand = command => {
    this.setState(({ logs, POS, OPS, language }) => ({
      ...applyCommand({ command, logs, POS, OPS, language }),
    }));
  };

  changeLanguage = language =>
    this.setState({
      language,
    });

  render() {
    const { language, logs, POS, OPS } = this.state;

    return (
      <main>
        <Status
          POS={POS}
          OPS={OPS}
          onChangeLanguage={this.changeLanguage}
          language={language}
        />
        <Log logs={logs} />
        <Input onCommand={this.onCommand} />
      </main>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
