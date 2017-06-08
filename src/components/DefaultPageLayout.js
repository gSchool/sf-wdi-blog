import React from 'react';
import { Link } from 'react-router-dom';

import paths from '../constants/paths';
import './DefaultPageLayout.css';

export default function DefaultPageLayout({ pageTitle, children }) {
  return (
    <div className="DefaultPageLayout">
      <header className="DefaultPageLayout-topBar">
        <h1 className="DefaultPageLayout-topBarHeading"><Link className="DefaultPageLayout-indexPageLink" to={paths.INDEX_PAGE_PATH}>SF WDI Blog</Link></h1>
      </header>
      <main>
        <h1 className="DefaultPageLayout-pageTitle">{pageTitle}</h1>
        <div className="DefaultPageLayout-pageContent">
          {children}
        </div>
      </main>
    </div>
  );
}
