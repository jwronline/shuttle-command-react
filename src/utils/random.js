/**
 * Get a random whole number
 * @param {number} min Lower bound (included)
 * @param {number} max Upper bound (not included)
 */
export const random = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);
