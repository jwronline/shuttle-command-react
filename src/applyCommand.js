import data from './data';

const getHelp = ({ POS, OPS }) => {
  const fallback = 'This is the fallback help text';
  if (POS) {
    const dataHelpText = data[POS];
    return Array.isArray(dataHelpText) ? dataHelpText : [dataHelpText];
  }
  return [fallback];
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

  return {
    command: '',
  };
}
