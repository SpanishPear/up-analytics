const API_URL ="https://api.up.com.au/api/v1";
const AUTH_TOKEN=process.env.REACT_APP_AUTH_TOKEN;

// takes in an object
const API = {
  request: async ({ path, body, header, queries = {}, method = "GET" }) => {
    const endpoint = new URL(`${API_URL}${path}`);
    endpoint.search = new URLSearchParams(queries);

    const payload = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${AUTH_TOKEN}`,
        ...header,
      },
    };
    if (method !== "GET") payload.body = JSON.stringify(body);

    return fetch(endpoint, payload);
  },
};

export default API;
