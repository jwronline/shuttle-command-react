const HOUR_IN_MS = 60 * 1000;

export const isoDate = date =>
  new Date(date.getTime() - date.getTimezoneOffset() * HOUR_IN_MS)
    .toISOString()
    .replace(/\.\d{3}Z/, '')
    .replace('T', ' ');
