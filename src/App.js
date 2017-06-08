import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { Component } from 'react';

import ArticlePageContainer from './redux/containers/ArticlePageContainer';
import createStore from './redux/createStore';
import IndexPageContainer from './redux/containers/IndexPageContainer';
import paths from './constants/paths';
import PostArticlePageContainer from './redux/containers/PostArticlePageContainer';

const store = createStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path={paths.INDEX_PAGE_PATH} component={IndexPageContainer} />
              <Route exact path={paths.ARTICLE_PAGE_PATH} component={ArticlePageContainer} />
              <Route exact path={paths.POST_ARTICLE_PAGE_PATH} component={PostArticlePageContainer} />
              <Route render={renderNotFoundMessage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

function renderNotFoundMessage() {
  return (
    <div className="NotFoundAlert">
      <h1>Not Found</h1>
      <p>Sorry, the URL you're trying to access does not correspond to a resource.</p>
    </div>
  );
}

export default App;
