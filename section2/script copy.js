/*const pageTitle = document.getElementsByTagName("title")[0];
console.log(pageTitle);
pageTitle.innerHTML = "Today I Learned!!!!!!!!!1";*/

document.getElementsByTagName("title")[0].innerHTML =
  "Today I Learned!!!!!!!!!";

const getLogo = document.getElementsByClassName("logo")[0];
console.log("this is logo", getLogo);

const getheading = getLogo.getElementsByTagName("h1")[0];
console.log("this is heading", getheading);

getheading.innerHTML = "Today I Learned!!!!!!!!!";

console.log(document.head);
