import data from './data';

const getHelp = ({ POS, OPS, language }) => {
  const fallback = data.shared[language].help_fallback;
  if (POS) {
    let dataHelpText = data[POS][language].help;
    if (OPS) {
      dataHelpText = data[POS][language].OPS[OPS].help;
    }

    return Array.isArray(dataHelpText) ? dataHelpText : [dataHelpText];
  }
  return [fallback];
};

export const getLogsFromItem = ITEM => {
  let logs = ITEM.logs;
  if (ITEM.getLogs) {
    logs = ITEM.getLogs();
  }
  if (!Array.isArray(logs)) {
    logs = [logs];
  }
  return logs;
};

const initPosition = ({ POS, language }) => {
  try {
    let { logs, getLogs } = data[POS][language] || {};

    return {
      newLogs: getLogsFromItem({ logs, getLogs }),
    };
  } catch (e) {}
  return {
    newLogs: ['invalid position'],
  };
};

const initOperation = ({ POS, OPS, language }) => {
  try {
    let { logs, getLogs } = data[POS][language].OPS[OPS] || {};

    return {
      newLogs: getLogsFromItem({ logs, getLogs }),
    };
  } catch (e) {}
  return {
    newLogs: ['invalid operation'],
  };
};

const execute = ({ POS, OPS, ITEM, language }) => {
  try {
    let { logs, getLogs, endsOPS } =
      data[POS][language].OPS[OPS].ITEM[ITEM] || {};

    return {
      newOPS: endsOPS ? undefined : OPS,
      newLogs: getLogsFromItem({ logs, getLogs }),
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
};

export function applyCommand({ command, logs, POS, OPS, language }) {
  // help
  if (command === 'HELP') {
    return {
      command: '',
      logs: [...logs, ...getHelp({ POS, OPS, language })],
    };
  }

  const type = command.slice(0, command.length - 3);
  const number = command.slice(-3);

  // set position
  if (!POS && type === 'POS') {
    if (data[number] && data[number][language]) {
      const { newLogs } = initPosition({
        POS: number,
        language,
      });
      return {
        ...defaultState,
        logs: [...logs, ...newLogs],
        POS: number,
      };
    }
  }

  // reset
  if (OPS === '999' && type === 'ITEM' && number === '999') {
    return {
      ...defaultState,
    };
  }

  // not in an operation yet
  if (POS && !OPS && type === 'OPS') {
    const { newLogs } = initOperation({ POS, OPS: number, language });
    return {
      OPS: number,
      logs: [...logs, ...newLogs],
      command: '',
    };
  }

  // in an operation and typed an item
  if (OPS && type === 'ITEM') {
    const { newOPS, newLogs } = execute({ POS, OPS, ITEM: number, language });
    return {
      command: '',
      logs: [...logs, ...newLogs],
      OPS: newOPS,
    };
  }

  return {
    logs: [...logs, data.shared[language].incorrect_command],
    command: '',
  };
}
