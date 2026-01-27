const BASE_URL = import.meta.env.PROD
  ? "https://nomoreparties.co/news/v2/everything"
  : "https://newsapi.org/v2/everything";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function checkResponse(res) {
  if (!res.ok) {
    return res.text().then((text) => {
      throw new Error(text || `Request failed with status ${res.status}`);
    });
  }
  return res.json();
}

function formatDateForApi(date) {
  return date.toISOString().split("T")[0];
}

function getLast7DaysRange() {
  const today = new Date();
  const sevenDaysAgo = new Date();

  sevenDaysAgo.setDate(today.getDate() - 7);

  return {
    from: formatDateForApi(sevenDaysAgo),
    to: formatDateForApi(today),
  };
}

export function getNewsByKeyword(keyword) {
  if (!API_KEY) {
    return Promise.reject(
      new Error("Missing VITE_NEWS_API_KEY in your .env file"),
    );
  }

  const { from, to } = getLast7DaysRange();

  const params = new URLSearchParams({
    q: keyword,
    apiKey: API_KEY,
    from,
    to,
    pageSize: "100",
  });

  return fetch(`${BASE_URL}?${params.toString()}`).then(checkResponse);
}
