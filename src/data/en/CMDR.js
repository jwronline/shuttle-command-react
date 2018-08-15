import React, { Fragment } from 'react';
import { Red } from '../../components/colors';

export default {
  init: 'Welcome to the commander position',
  help: 'default help text for commander',
  OPS: {
    '001': {
      help: 'items that work are 001 and 002',
      ITEM: {
        '001': {
          logs: ['log line for item 1'],
          endsOPS: true,
        },
        '002': {
          getLogs: () => 'log line for item 2 ' + Math.random(),
          endsOPS: true,
        },
        '003': {
          logs: 'single line ops',
          endsOPS: true,
        },
      },
    },
    '002': {
      help: 'This one has colours',
      ITEM: {
        '001': {
          getLogs: () => (
            <Fragment>
              Hey there this is my <Red>Item</Red>
            </Fragment>
          ),
          endsOPS: true,
        },
      },
    },
  },
};
