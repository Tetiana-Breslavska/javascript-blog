'use strict';

function titleClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for (let activeLink of activeLinks) {
    activeLink.classList.remove('active');
    console.log('delet');
  }

  /* add class 'active' to the clicked link */

  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts article.active');
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    console.log('delet article');
  }

  /* get 'href' attribute from the clicked link */
    
  let articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);

  /* find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle', targetArticle);

  /* add class 'active' to the correct article */
  targetArticle.classList.add('active');
}



// const articles = document.querySelectorAll(".posts article");
// console.log('articles',articles);

// for (let article of articles) {
//   article.addEventListener('click', titleClickHandler);
// }

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks() {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList', titleList);
  titleList.innerHTML = '';
 
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  let html = '';
    
  /* get the article id */
  for (let article of articles) {
    const articleId = article.getAttribute('id');
    console.log(articleId);
    
    /* find the title element */
    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);
    
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    // console.log(linkHTML);

    /* insert link into titleList */
    
    // titleList.innerHTML = titleList.innerHTML + linkHTML;
    // titleList.insertAdjacentHTML('afterbegin', linkHTML);
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('list:', links);

  for (let link of links) {
    link.addEventListener('click', titleClickHandler);
  }

 
}

generateTitleLinks(); 

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  /* START LOOP: for every article: */
  for (let article of articles) {
    const articleId = article.getAttribute('id');
    console.log(articleId);
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    console.log('tagsWrapper', tagsWrapper);

    /* make html variable with empty string */     
    let html = '';
    
    /* get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(articleTags);          
                     
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');  
    console.log(articleTagsArray);  

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      console.log(tag);  

      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log(linkHTML);  

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log(html);

    }
      
    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
    console.log(tagsWrapper);

  }
  /* END LOOP: for every article: */
}

generateTags();