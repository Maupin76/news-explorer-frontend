const BASE_URL = import.meta.env.PROD
  ? "https://api.news.douglasmaupin.com"
  : "http://localhost:3001";

function checkResponse(res) {
  if (!res.ok) {
    return res.text().then((text) => {
      throw new Error(text || `Request failed with status ${res.status}`);
    });
  }
  return res.json();
}

export function getNewsByKeyword(keyword) {
  return fetch(`${BASE_URL}/news?keyword=${keyword}`).then(checkResponse);
}
