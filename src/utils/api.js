export let savedArticles = [];

export function getItems() {
  return new Promise((resolve) => {
    resolve(savedArticles);
  });
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    const exists = savedArticles.some(
      (item) => item.title === article.title && item.date === article.date,
    );

    if (exists) {
      reject(new Error("Article already saved"));
      return;
    }

    const saved = {
      ...article,
      _id: crypto.randomUUID(),
    };

    savedArticles.push(saved);
    resolve(saved);
  });
}

export function deleteArticle(id) {
  return new Promise((resolve) => {
    savedArticles = savedArticles.filter((item) => item._id !== id);
    resolve({ message: "Article deleted" });
  });
}
