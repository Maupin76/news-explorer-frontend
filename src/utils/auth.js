// export const authorize = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ token: "fake-jwt-token" });
//     }, 500);
//   });
// };

// export const checkToken = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         data: {
//           name: "Douglas",
//           email: "douglas@example.com",
//           _id: "fake-user-id",
//         },
//       });
//     }, 500);
//   });
// };

const BASE_URL = "http://localhost:3001";

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
