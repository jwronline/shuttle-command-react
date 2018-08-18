import enCMDR from './en/CMDR';
import nlCMDR from './nl/CMDR';
import enShared from './en/shared';
import nlShared from './nl/shared';
import nlPLT from './nl/PLT';
import enPLT from './en/PLT';
import nlFD from './nl/FD';
import enFD from './en/FD';
import nlWXT from './nl/WXT';
import enWXT from './en/WXT';
import nlLD from './nl/LD';
import enLD from './en/LD';
import nlELSS from './nl/ELSS';
import enELSS from './en/ELSS';
import nlSSO from './nl/SSO';
import enSSO from './en/SSO';
import nlPAO from './nl/PAO';
import enPAO from './en/PAO';

export default {
  '001': {
    name: 'CMDR',
    nl: nlCMDR,
    en: enCMDR,
  },
  '002': {
    name: 'PLT',
    nl: nlPLT,
    en: enPLT,
  },
  '003': {
    name: 'FD',
    nl: nlFD,
    en: enFD,
  },
  '004': {
    name: 'WXT',
    nl: nlWXT,
    en: enWXT,
  },
  '005': {
    name: 'LD',
    nl: nlLD,
    en: enLD,
  },
  '006': {
    name: 'ELSS',
    nl: nlELSS,
    en: enELSS,
  },
  '007': {
    name: 'SSO',
    nl: nlSSO,
    en: enSSO,
  },
  '008': {
    name: 'PAO',
    nl: nlPAO,
    en: enPAO,
  },

  shared: {
    en: enShared,
    nl: nlShared,
  },
};
