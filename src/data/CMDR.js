export default {
  init: 'Welcome to the commander position',
  help: 'default help text for commander',
  OPS: {
    '001': {
      help: 'help text for operation 1',
      ITEM: {
        '001': {
          logs: ['log line for item 1'],
          endsOPS: true,
        },
      },
    },
  },
};
