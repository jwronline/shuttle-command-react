import React from 'react';
import { Red, Green } from '../../components/colors';
import { Countdown } from '../../components/Countdown';
import { random } from '../../utils';

export default {
  logs: 'Welcome to the commander position',
  help: 'default help text for commander',
  OPS: {
    '008': {
      getLogs: () => [
        'OMS ignition 1',
        <>
          OMS fuel level: <Green>{random(80, 100)}</Green>%
        </>,
      ],
      ITEM: {
        '301': {
          logs: [
            <>
              OMS-1: <Green>on</Green>
            </>,
            <>
              OMS-2: <Green>on</Green>
            </>,
            <>
              OMS-3: <Green>on</Green>
            </>,
          ],
        },
        '474': {
          logs: [
            <>
              starting OMS flight profile: <Green>high</Green>
            </>,
            <Countdown from={10}>
              <Green>OMS ignition</Green>
            </Countdown>,
          ],
          endsOPS: true,
        },
        '475': {
          logs: [
            <>
              starting OMS flight profile: <Green>normal</Green>
            </>,
            <Countdown from={10}>
              <Green>OMS ignition</Green>
            </Countdown>,
          ],
          endsOPS: true,
        },
        '476': {
          logs: [
            <>
              starting OMS flight profile: <Green>low</Green>
            </>,
            <Countdown from={10}>
              <Green>OMS ignition</Green>
            </Countdown>,
          ],
          endsOPS: true,
        },
      },
    },
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
            <>
              Hey there this is my <Red>Item</Red>
            </>
          ),
          endsOPS: true,
        },
      },
    },
  },
};
