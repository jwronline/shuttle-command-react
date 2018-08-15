import data from './data';

const getHelp = ({ POS, OPS }) => {
  const fallback = 'This is the fallback help text';
  if (POS) {
    const dataHelpText = data[POS];
    return Array.isArray(dataHelpText) ? dataHelpText : [dataHelpText];
  }
  return [fallback];
};

const execute = ({ POS, OPS, ITEM }) => {
  try {
    const { logs, endsOPS } = data[POS].OPS[OPS].ITEM[ITEM] || {};
    // todo: allow logs to be a function
    const newLogs = Array.isArray(logs) ? logs : [];
    return {
      newOPS: endsOPS ? undefined : OPS,
      newLogs,
    };
  } catch (e) {}
  return {
    newOPS: OPS,
    newLogs: ['invalid item'],
  };
};

export const defaultState = {
  command: '',
  POS: undefined,
  OPS: undefined,
  ITEM: undefined,
};

export function applyCommand({ command, logs, POS, OPS, ITEM }) {
  if (command === 'HELP') {
    return {
      command: '',
      logs: [...logs, ...getHelp({ POS, OPS })],
    };
  }
  const type = command.slice(0, command.length - 3);
  const number = command.slice(-3);
  console.log(type, number);

  // if no position yet set, go to that one
  if (!POS && type === 'POS') {
    return {
      ...defaultState,
      POS: number,
    };
  }
  if (OPS === '999' && type === 'ITEM' && number === '999') {
    return {
      ...defaultState,
      POS: number,
    };
  }
  if (OPS && type === 'ITEM') {
    const { newOPS, newLogs } = execute({ POS, OPS, ITEM: number });
    return {
      command: '',
      logs: [...logs, ...newLogs],
      OPS: newOPS,
    };
  }
  if (!OPS && type === 'OPS') {
    return {
      ITEM: undefined,
      OPS: number,
      command: '',
    };
  }

  return {
    command: '',
  };
}
