import { delay } from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(path, ms = 500) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
    });

    await delay(ms);

    return response.json();
  }
}

export default HttpClient;
