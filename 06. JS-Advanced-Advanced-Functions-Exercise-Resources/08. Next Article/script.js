function getArticleGenerator(articles) {
  return () => {
    const div = document.getElementById('content');
    //debugger;
    if (articles.length > 0) {
      let currentLine = articles.shift();

      const article = document.createElement('article');
      article.textContent = currentLine;
      div.appendChild(article);
    }
  };
}
