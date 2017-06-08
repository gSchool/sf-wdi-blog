import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import fetchArticle from '../thunks/fetchArticle';
import getArticlePageState from '../selectors/getArticlePageState';
import ArticlePage from '../../components/ArticlePage';

function mapStateToProps(state, ownProps) {
  return getArticlePageState(state);
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchArticle: id => dispatch(fetchArticle(id))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }
});

export default compose(connectToStore, onDidMount)(ArticlePage);
