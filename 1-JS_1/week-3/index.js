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

function checkNumber(number) {
  if (number < 0) {
    throw TypeError('не может быть отрицательным')      
  }
}

function changeDate(date, number, times) {
  switch (times) {
    case 'years':
      date.setFullYear(date.getFullYear() + number);
      break;
    case 'months':
      date.setMonth(date.getMonth() + number);
      break;
    case 'days':
      date.setDate(date.getDate() + number);
      break;
    case 'hours':
      date.setHours(date.getHours() + number);
      break;
    case 'minutes':
      date.setMinutes(date.getMinutes() + number);
      break;
    default:
      throw TypeError('нет такого периода времени')
  }
}

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
  date = new Date(date);

  return {
    get value() { return formatDate(date) },

    add: function(number, times) {
      checkNumber(number);
      changeDate(date, number, times);
  
      return this;
    },

    subtract: function(number, times) {
      checkNumber(number);
      number *= -1;
      changeDate(date, number, times);
  
      return this;
    }
  }
};
