const { STATUS_CODES } = require('http');

function generateStatusCodes() {
  const statusCodes = Object.keys(STATUS_CODES).reduce(
    (accumulator, currentValue) => {
      const statusCodeValue = STATUS_CODES[currentValue];

      const key = statusCodeValue.split(' ').join('_').toUpperCase();

      accumulator[key] = Number(currentValue);
      return accumulator;
    },
    {}
  );

  return statusCodes;
}

module.exports = {
  generateStatusCodes,
};
