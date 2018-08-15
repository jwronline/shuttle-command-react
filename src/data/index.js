import enCMDR from './en/CMDR.js';
import nlCMDR from './nl/CMDR.js';
import enShared from './en/shared.js';
import nlShared from './nl/shared.js';

export default {
  '001': {
    nl: nlCMDR,
    en: enCMDR,
  },
  shared: {
    en: enShared,
    nl: nlShared,
  },
};
