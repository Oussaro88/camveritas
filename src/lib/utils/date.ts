const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const now = new Date();

/** "April 2026" */
export const CURRENT_DATE = `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;