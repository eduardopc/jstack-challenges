const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Eduardo',
    email: 'eduardo@test.com',
    phone: '123456',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Arthur',
    email: 'arthur@test.com',
    phone: '123456',
    category_id: v4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  remove(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
