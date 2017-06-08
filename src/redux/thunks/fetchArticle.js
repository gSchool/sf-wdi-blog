import { FETCH_ARTICLE_STARTED, FETCH_ARTICLE_COMPLETED, FETCH_ARTICLE_FAILED } from '../constants/actionTypes';
import ArticleRepository from '../../model/repositories/ArticleRepository';
import config from '../../config';

const repository = new ArticleRepository(config.API_BASE_URL);

export default function(id) {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_ARTICLE_STARTED });
    return repository
      .getArticle(id)
      .then(article => {
        dispatch({ type: FETCH_ARTICLE_COMPLETED, article });
        return article;
      })
      .catch(error => {
        dispatch({ type: FETCH_ARTICLE_FAILED, error });
        return error;
      });
  };
}
