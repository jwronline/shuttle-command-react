import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Status } from './components/Status';
import { Log } from './components/Log';
import { Input } from './components/Input';
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
        <Log
          logs={[
            ...Array.from({ length: 100 }, (_, i) => `this is log ${i}`),
            ...logs,
          ]}
        />
        <Input onCommand={this.onCommand} />
      </main>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
