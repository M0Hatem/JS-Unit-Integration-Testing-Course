export function transformToNumber(value) {
  if (value === undefined) {
    throw new Error('No argument provided');
  }
  return +value;
}

