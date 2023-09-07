import APIError from '../../errors/APIError';
import { delay } from '../../utils/delay';

class HttpClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(path, options) {
    return this.makeRequest(path, { method: 'GET', headers: options?.headers });
  }

  delete(path, options) {
    return this.makeRequest(path, { method: 'DELETE', headers: options?.headers });
  }

  post(path, options) {
    const headers = new Headers({
      ...options?.headers,
      'Content-Type': 'application/json',
    });

    return this.makeRequest(path, {
      method: 'POST',
      body: JSON.stringify(options?.body),
      headers,
    });
  }

  put(path, options) {
    const headers = new Headers({
      ...options?.headers,
      'Content-Type': 'application/json',
    });

    return this.makeRequest(path, {
      method: 'PUT',
      body: JSON.stringify(options?.body),
      headers,
    });
  }

  async makeRequest(path, options, ms = 500) {
    await delay(ms);

    const response = await fetch(`${this.baseUrl}${path}`, options);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }
}

export default HttpClient;
