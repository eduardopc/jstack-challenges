import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor() {
    this.httpClient = new HttpClient('http://localhost:1337');
  }

  async listContacts(urlPath) {
    return this.httpClient.get(`/contacts?${urlPath}`);
  }
}

export default new ContactsService();
