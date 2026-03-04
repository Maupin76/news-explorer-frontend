const BASE_URL = "https://api.news.douglasmaupin.com";

export const signup = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(res.status);
    }
    return res.json();
  });
};

export const getCurrentUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
