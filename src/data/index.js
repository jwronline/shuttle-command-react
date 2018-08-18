import enCMDR from './en/CMDR.js';
import nlCMDR from './nl/CMDR.js';
import enShared from './en/shared.js';
import nlShared from './nl/shared.js';

export default {
  '001': {
    name: 'CMDR',
    nl: nlCMDR,
    en: enCMDR,
  },
  shared: {
    en: enShared,
    nl: nlShared,
  },
};
