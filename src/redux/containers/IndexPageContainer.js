import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import fetchArticles from '../thunks/fetchArticles';
import getIndexPageState from '../selectors/getIndexPageState';
import IndexPage from '../../components/IndexPage';

function mapStateToProps(state, ownProps) {
  return getIndexPageState(state);
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchArticles: () => dispatch(fetchArticles())
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.fetchArticles();
  }
});

export default compose(connectToStore, onDidMount)(IndexPage);
