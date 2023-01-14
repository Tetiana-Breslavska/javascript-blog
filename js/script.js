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
  optArticleTagsSelector = '.post-tags .list',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = '') {

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log('titleList', titleList);
  titleList.innerHTML = '';
  console.log('customSelector', customSelector);
  /* for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
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

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();

  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;

  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(href);
  
  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log(tag);
  
  /* find all tag links with class active */
  const activeLinksToTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(activeLinksToTags);

  /* START LOOP: for each active tag link */
  for (let activeLinkToTag of activeLinksToTags) {

    /* remove class active */
    activeLinkToTag.classList.remove('active');
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const equalLinksToTags = document.querySelectorAll('a[href="' + href + '"]');
  console.log(equalLinksToTags);

  /* START LOOP: for each found tag link */
  for (let equalLinkToTag of equalLinksToTags) {

    /* add class active */
    equalLinkToTag.classList.add('active');
    /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}



function addClickListenersToTags() {
  
  /* find all links to tags */
  const linksToTags = document.querySelectorAll('.post-tags a');
  console.log('linksToTags:', linksToTags);
  
  /* START LOOP: for each link */
  for (let linkToTag of linksToTags) {

    /* add tagClickHandler as event listener for that link */
    linkToTag.addEventListener('click', tagClickHandler);
  }
  /* END LOOP: for each link */
}

addClickListenersToTags();

// ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo

function generateAuthors() {
  
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('articles', articles);

  /* START LOOP: for every article: */
  for (let article of articles) {

    /* find  author wrapper */
    const authorsWrapper = article.querySelector(optArticleAuthorSelector);
    console.log('authorsWrapper', authorsWrapper);

    /* make html variable with empty string */     
    let html = '';
    
    /* get author from data-author attribute */
    const articleAuthors = article.getAttribute('data-author');
    console.log(articleAuthors);          
     
    /* generate HTML of the link ------нужен ли тут span, */
    const linkHTML = '<li><a href="#' + articleAuthors + '">' + 'by ' + articleAuthors + '</a></li>';
    console.log(linkHTML);  

    /* add generated code to html variable */
    html = html + linkHTML;
    console.log(html);
      
    /* insert HTML of all the links into the tags wrapper */
    authorsWrapper.innerHTML = html;
    
    console.log(authorsWrapper);

  }
  
}

generateAuthors();
