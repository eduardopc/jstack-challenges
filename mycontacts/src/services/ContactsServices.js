import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:1337');
  }

  listContacts(urlPath) {
    return this.httpClient.get(`/contacts?${urlPath}`);
  }

  getContactById(id) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContact(contact) {
    return this.httpClient.post('/contacts', {
      body: contact,
      headers: {
        Authorization: '123',
      },
    });
  }

  updateContact(id, contact) {
    return this.httpClient.put(`/contacts/${id}`, {
      body: contact,
      headers: {
        Authorization: '123',
      },
    });
  }
}

export default new ContactsService();
