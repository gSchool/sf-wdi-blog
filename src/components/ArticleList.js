import React from 'react';

import ArticlePreview from './ArticlePreview';

export default function ArticleList({ articles }) {
  let view = null;
  if (!Array.isArray(articles)) {
    view = <p>Loading...</p>;
  } else if (articles.length === 0) {
    view = <p>No articles available at this time.</p>;
  } else {
    view = articles.map(article => <ArticlePreview key={article.id} article={article} />);
  }
  return <div className="ArticleList">{view}</div>;
}
