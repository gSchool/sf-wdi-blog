import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';

import './ArticlePage.css';

export default function ArticlePage({ article }) {
  if (!article) return null;
  return (
    <div className="ArticlePage">
      <DefaultPageLayout pageTitle={article.title}>
        <p><i>Written By:</i>&nbsp;{article.user.name}</p>
        <p><i>Posted At:</i>&nbsp;{article.timePosted}</p>
        <p>{article.text}</p>
      </DefaultPageLayout>
    </div>
  );
}
