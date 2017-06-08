import React from 'react';
import { Link } from 'react-router-dom';

import paths from '../constants/paths';

import './ArticlePreview.css';

export default function ArticlePreview({ article }) {
  return (
    <div className="ArticlePreview">
      <h2><Link to={paths.ARTICLE_PAGE_PATH.replace(':id', article.id)}>{article.title}</Link></h2>
      <p><i>Written By:</i>&nbsp;{article.user.name}</p>
      <p><i>Posted At:</i>&nbsp;{article.timePosted}</p>
    </div>
  );
}
