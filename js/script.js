"use strict";

function titleClickHandler(event) {
  const clickedElement = this;
  console.log("Link was clicked!");
  console.log(event);

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
    console.log("delet");
  }

    /* add class 'active' to the clicked link */
    
    console.log('clickedElement:', clickedElement);
     clickedElement.classList.add("active");
    
    // console.log('clickedElement (with plus): ' + clickedElement);

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".posts article.active");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
    console.log("delet article");
  }

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const articles = document.querySelectorAll(".posts article");

for (let article  of articles) {
  article.addEventListener("click", titleClickHandler);
}
