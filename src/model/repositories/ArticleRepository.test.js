import ArticleRepository from './ArticleRepository';
import config from '../../config';

describe('ArticleRepository', function() {
  const repository = new ArticleRepository(config.API_BASE_URL);

  it('getArticles', function() {
    fetch.mockResponse(JSON.stringify([{ id: 1, title: 'Title' }]));

    return repository.getArticles().then(articles => {
      expect(articles).toEqual([{ id: 1, title: 'Title' }]);
      return articles;
    });
  });

  it('getArticle', function() {
    fetch.mockResponse(JSON.stringify({ id: 1, title: 'Title' }));

    return repository.getArticle(1).then(article => {
      expect(article).toEqual({ id: 1, title: 'Title' });
      return article;
    });
  });

  afterAll(function() {
    fetch.resetMocks();
  });
});
