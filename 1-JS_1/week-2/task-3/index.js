// Телефонная книга
var phoneBook = {};

function changePhoneList(phones, newPhones) {
  return newPhones.reduce(function(acc, item) {
    if (acc.indexOf(item) === -1) {
      acc.push(item);
    }

    return acc;
  }, phones)
}

function addContact(name, phones) {
  phoneBook[name] = phoneBook.hasOwnProperty(name) ?
    changePhoneList(phoneBook[name], phones) :
    phones;

  return phoneBook[name];
}

function removeContactPhoneAt(person, index) {  
  phoneBook[person].splice(index, 1);

  if (phoneBook[person].length === 0) {
    delete phoneBook[person];
  }
}

function removePhone(number) {  
  for (person in phoneBook) {
    var index = phoneBook[person].indexOf(number); 
    if (index !== -1) {
      removeContactPhoneAt(person, index)
      return true;
    }
  }

  return false;
}

function showContacts() {
  var contacts = [];

  for (person in phoneBook) {
    contacts.push(person + ': ' + phoneBook[person].join(', '))
  }

  return contacts.sort()
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
  var commandArray = command.split(' ');
  var commandName = commandArray[0];

  switch (commandName) {
    case 'ADD':
      var name = commandArray[1];
      var phones = commandArray[2].split(',');

      return addContact(name, phones);

    case 'REMOVE_PHONE':
      var number = commandArray[1];

      return removePhone(number);

    case 'SHOW':
      return showContacts();
  }

};
