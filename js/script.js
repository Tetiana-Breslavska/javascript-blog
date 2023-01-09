"use strict";

function titleClickHandler(event) {
  event.preventDefault();
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

  console.log("clickedElement:", clickedElement);
  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll(".posts article.active");
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
    console.log("delet article");
  }

    /* get 'href' attribute from the clicked link */
    
  let attribute = clickedElement.getAttribute("href");
  console.log(attribute);

  /* find the correct article using the selector (value of 'href' attribute) */

  const clickArticle = document.querySelector(attribute);
  console.log("clickArticle", clickArticle);

  /* add class 'active' to the correct article */
  clickArticle.classList.add("active");
}

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

const articles = document.querySelectorAll(".posts article");
console.log(articles);

for (let article of articles) {
  article.addEventListener("click", titleClickHandler);
}
