import textTable from 'text-table';

export const table = arr =>
  textTable([Object.keys(arr[0]), ...arr.map(obj => Object.values(obj))], {
    hsep: ' | ',
  });
