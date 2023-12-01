export function validateInstance(value, className) {
    if (!(value instanceof className)) {
      throw new Error(`The value is not instance of ${className}.`);
    }
    return true;
}