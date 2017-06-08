import { FETCH_ARTICLES_STARTED, FETCH_ARTICLES_COMPLETED, FETCH_ARTICLES_FAILED } from '../constants/actionTypes';
import ArticleRepository from '../../model/repositories/ArticleRepository';
import config from '../../config';

const repository = new ArticleRepository(config.API_BASE_URL);

export default function() {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_ARTICLES_STARTED });
    return repository
      .getArticles()
      .then(articles => {
        dispatch({ type: FETCH_ARTICLES_COMPLETED, articles });
        return articles;
      })
      .catch(error => {
        dispatch({ type: FETCH_ARTICLES_FAILED, error });
        return error;
      });
  };
}
