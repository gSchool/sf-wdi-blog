import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import ArticleList from './ArticleList';

export default function IndexPage({ articles }) {
  return (
    <div className="IndexPage">
      <DefaultPageLayout pageTitle="Articles">
        <ArticleList articles={articles} />
      </DefaultPageLayout>
    </div>
  );
}
