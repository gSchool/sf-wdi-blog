['FETCH_ARTICLES_', 'FETCH_ARTICLE_'].forEach(type => {
  if (type.endsWith('_')) {
    Object.assign(exports, {
      [`${type}STARTED`]: `${type}STARTED`,
      [`${type}COMPLETED`]: `${type}COMPLETED`,
      [`${type}FAILED`]: `${type}FAILED`
    });
  } else {
    Object.assign(exports, {
      [type]: type
    });
  }
});
