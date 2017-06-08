export default class ArticleRepository {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles?_expand=user`).then(response => response.json());
  }

  getArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}?_expand=user`).then(response => response.json());
  }
}
