class Http {
  constructor() {
    this.baseUrl = "";
  }

  setBaseUrl(url) {
    this.baseUrl = url;
  }

  getBaseUrl() {
    return this.baseUrl;
  }

  get(endpoint) {
    return fetch(this.baseUrl + endpoint).then(this.readAsJson);
  }

  readAsJson(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  post(endpoint, data) {
    return fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json());
  }
}

export default Http;
