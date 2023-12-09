function validateInstance(value, className) {
    if (!(value instanceof className)) {
      throw new Error(`The value is not instance of the right class.`);
    }
    return true;
}

module.exports = validateInstance