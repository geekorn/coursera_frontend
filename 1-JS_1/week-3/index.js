/**
 * @param {String} date
 * @returns {Object}
 */
// module.exports = 
function time(date) {
  date = new Date(date);
  this.value = formatDate(date);

  function prependZero(number) {
    return number < 10 ? '0' + number : number
  }

  function formatDate(date) {    
    var dateObject = {
      year: prependZero(date.getFullYear()),
      month: prependZero(date.getMonth() + 1),
      day: prependZero(date.getDate()),
      hours: prependZero(date.getHours()),
      minutes: prependZero(date.getMinutes()),
    }

    return dateObject.year + '-' + dateObject.month + '-' + dateObject.day + ' ' + dateObject.hours + ':' + dateObject.minutes
  }

  function changeDate(number, times, action) {
    if (number < 0) {
      throw TypeError('не может быть отрицательным')      
    }

    number = (action === 'diff') ? -number : number;

    switch (times) {
      case 'years':
        date = date.setFullYear(date.getFullYear() + number);
        break;
      case 'months':
        date = date.setMonth(date.getMonth() + number);
        break;
      case 'days':
        date = date.setDate(date.getDate() + number);
        break;
      case 'hours':
        date = date.setHours(date.getHours() + number);
        break;
      case 'minutes':
        date = date.setMinutes(date.getMinutes() + number);
        break;
      default:
        throw TypeError('нет такого периода времени')
    }

    date = new Date(date)

    return formatDate(date);
  }

  this.add = function(number, times) {
    this.value = changeDate(number, times, 'sum');

    return this;
  }

  this.subtract = function(number, times) {
    this.value = changeDate(number, times, 'diff');

    return this;
  }

  return {
    value: this.value,
    add: this.add,
    subtract: this.subtract
  }
};

module.exports = time