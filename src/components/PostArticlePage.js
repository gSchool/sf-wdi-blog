import React from 'react';

import DefaultPageLayout from './DefaultPageLayout';
import EditArticleForm from './EditArticleForm';

export default function PostArticlePage() {
  return (
    <DefaultPageLayout pageTitle="Post New Article">
      <EditArticleForm />
    </DefaultPageLayout>
  );
}
