// deze imports zijn enkel nodig voor commands met React
import React from 'react';
import { Red, Green, Countdown } from '../../components';
import { random } from '../../utils';

export default {
  logs: 'Welkom commandant',
  help: 'Je bent een commandant, voer een operatie in waar gevraagd',
  OPS: {
    '008': {
      getLogs: () => [
        'OMS ontsteking 1',
        <>
          OMS brandstofniveau: <Green>{random(80, 100)}</Green>%
        </>,
      ],
      ITEM: {
        '301': {
          logs: [
            <>
              OMS-1: <Green>ingeschakeld</Green>
            </>,
            <>
              OMS-2: <Green>ingeschakeld</Green>
            </>,
            <>
              OMS-3: <Green>ingeschakeld</Green>
            </>,
          ],
        },
        '474': {
          logs: [
            <>
              initialisering van vluchtprogramma: <Green>hoog</Green>
            </>,
            <Countdown from={10}>
              <Green>OMS ontsteking</Green>
            </Countdown>,
          ],
          endsOPS: true,
        },
        '475': {
          logs: [
            <>
              initialisering van vluchtprogramma: <Green>normaal</Green>
            </>,
            <Countdown from={10}>
              <Green>OMS ontsteking</Green>
            </Countdown>,
          ],
          endsOPS: true,
        },
        '476': {
          logs: [
            <>
              initialisering van vluchtprogramma: <Green>laag</Green>
            </>,
            <Countdown from={10}>
              <Green>OMS ontsteking</Green>
            </Countdown>,
          ],
          endsOPS: true,
        },
      },
    },
    '001': {
      help: '001, 002 en 003 zijn mogelijk',
      ITEM: {
        '001': {
          logs: ['lijn 1 is mogelijk', 'net als meerdere lijnen'],
          endsOPS: true,
        },
        '002': {
          getLogs: () =>
            `het kan interactief gemaakt worden met een functie ${Math.random()}`,
          endsOPS: true,
        },
        '003': {
          logs: 'een enkele lijn is ook mogelijk',
          endsOPS: true,
        },
      },
    },
    '002': {
      help: 'deze ops heeft kleuren',
      ITEM: {
        '001': {
          getLogs: () => (
            <>
              Hoi hoi ik ben <Red>rood</Red>
            </>
          ),
          endsOPS: true,
        },
      },
    },
  },
};
