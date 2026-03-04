// const BASE_URL = import.meta.env.PROD
//   ? "https://nomoreparties.co/news/v2/everything"
//   : "https://newsapi.org/v2/everything";

// const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
// const API_KEY = "6d80d50b288c4f4ab0b6ecdfdfa771c4";

// function checkResponse(res) {
//   if (!res.ok) {
//     return res.text().then((text) => {
//       throw new Error(text || `Request failed with status ${res.status}`);
//     });
//   }
//   return res.json();
// }

// function formatDate(date) {
// YYYY-MM-DD
// return date.toISOString().split("T")[0];
// }

// function getLast7DaysRange() {
//   const today = new Date();
//   const sevenDaysAgo = new Date();

//   sevenDaysAgo.setDate(today.getDate() - 7);

//   return {
//     from: formatDate(sevenDaysAgo),
//     to: formatDate(today),
//   };
// }

// export function getNewsByKeyword(keyword) {
// if (!API_KEY) {
//   return Promise.reject(new Error("Missing VITE_NEWS_API_KEY in .env"));
// }

//   const { from, to } = getLast7DaysRange();

//   const params = new URLSearchParams({
//     q: keyword,
//     apiKey: API_KEY,
//     from,
//     to,
//     pageSize: "100",
//   });

//   return fetch(`${BASE_URL}?${params.toString()}`).then(checkResponse);
// }

const BASE_URL = import.meta.env.PROD
  ? "https://your-production-domain.com"
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
