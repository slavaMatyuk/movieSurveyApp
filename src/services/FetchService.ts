export class FetchService {
  static async request(url: string, options?: RequestInit) {
    try {
      const fetchResponse = await fetch(`${process.env.REACT_APP_API_URL}${url}`, options);
      return await fetchResponse.json();
    } catch (e) {
      throw e;
    }
  }
}
