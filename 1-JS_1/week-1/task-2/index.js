/**
 * @param {Number} hours
 * @param {Number} minutes
 * @returns {Boolean}
 */
module.exports = function (hours, minutes) {
  hours = hours >= 0 && hours <= 23;
  minutes = minutes >= 00 && minutes <= 59;

  return hours && minutes;
};
