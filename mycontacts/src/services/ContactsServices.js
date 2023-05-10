import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:1337');
  }

  async listContacts(urlPath) {
    return this.httpClient.get(`/contacts?${urlPath}`);
  }

  async createContact(contact) {
    return this.httpClient.post('/contacts', {
      body: contact,
      headers: {
        Authorization: '123',
      },
    });
  }
}

export default new ContactsService();
