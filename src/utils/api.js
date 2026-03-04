// const BASE_URL = "http://localhost:3001";
const BASE_URL = "https://api.news.douglasmaupin.com";

function getAuthHeaders() {
  const token = sessionStorage.getItem("jwt");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// GET saved articles
export function getItems() {
  return fetch(`${BASE_URL}/articles`, {
    headers: getAuthHeaders(),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
}

// SAVE article
export function saveArticle(article) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(article),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
}

// DELETE article
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
}
