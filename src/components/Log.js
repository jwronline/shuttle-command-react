import React, { Component, createRef } from 'react';
import './Log.css';

export class Log extends Component {
  lastLog = createRef();

  scrollDown = () =>
    this.lastLog.current && this.lastLog.current.scrollIntoView();

  componentDidMount() {
    this.scrollDown();
  }
  componentDidUpdate() {
    this.scrollDown();
  }

  render() {
    const { logs } = this.props;
    return (
      <pre className="Log">
        {logs.map((log, i) => (
          <div
            key={i}
            ref={i === logs.length - 1 && this.lastLog}
            className="Log-line"
          >
            {log}
          </div>
        ))}
      </pre>
    );
  }
}
