// export let savedArticles = [];

// export function getItems() {
//   return new Promise((resolve) => {
//     resolve(savedArticles);
//   });
// }

// export function saveArticle(article) {
//   return new Promise((resolve, reject) => {
//     const exists = savedArticles.some(
//       (item) => item.title === article.title && item.date === article.date,
//     );

//     if (exists) {
//       reject(new Error("Article already saved"));
//       return;
//     }

//     const saved = {
//       ...article,
//       _id: crypto.randomUUID(),
//     };

//     savedArticles.push(saved);
//     resolve(saved);
//   });
// }

// export function deleteArticle(id) {
//   return new Promise((resolve) => {
//     savedArticles = savedArticles.filter((item) => item._id !== id);
//     resolve({ message: "Article deleted" });
//   });
// }

const BASE_URL = "http://localhost:3001";

// GET saved articles
export function getItems() {
  return fetch(`${BASE_URL}/articles`).then((res) =>
    res.ok ? res.json() : Promise.reject(res.status),
  );
}

// SAVE article
export function saveArticle(article) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
}

// DELETE article
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  }).then((res) => (res.ok ? res.json() : Promise.reject(res.status)));
}
