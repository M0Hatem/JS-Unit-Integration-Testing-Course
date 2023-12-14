export function transformToNumber(value) {
  if (value === undefined) {
    throw new Error("enter a valid value ");
  }
  return +value;
}
