// deze imports zijn enkel nodig voor *002/001
import React, { Fragment } from 'react';
import { Red } from '../../components/colors';

export default {
  init: 'Welkom commandant',
  help: 'Je bent een commandant, voer een operatie in waar gevraagd',
  OPS: {
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
            <Fragment>
              Hoi hoi ik ben <Red>rood</Red>
            </Fragment>
          ),
          endsOPS: true,
        },
      },
    },
  },
};
