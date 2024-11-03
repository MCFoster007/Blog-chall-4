const allBlogData = JSON.parse (localStorage.getItem("userData")) || [];
// TODO: Create a variable that selects the main element, and a variable that selects the back button element
container = document.querySelector(".container")

// TODO: Create a function that builds an element and appends it to the DOM
document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("toggle").addEventListener("click", function() {
     const body = document.getElementsByTagName('body')[0];
     body.classList.toggle("dark-theme");
 
     if (body.classList.contains("dark-theme")) {
       body.style.setProperty('--circle-color', 'your-dark-color'); 
     } else {
       body.style.setProperty('--circle-color', 'your-light-color'); 
     }
   });
 });
// TODO: Create a function that handles the case where there are no blog posts to display
function noBlogPost() {
   if (!allBlogData.length){
   //  alert("No Blog Posts are Found!");
   container.textContent = "no blog posts yet"
   }
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function
function buildsBlogEntry (blog){
const article = document.createElement("div");
const title = document.createElement("h2");
const content = document.createElement("p");
const username = document.createElement("h3");

title.textContent = blog.title;
content.textContent = blog.content;
username.textContent = blog.username;
article.appendChild(title);
article.appendChild(content);
article.appendChild(username);
container.appendChild(article);
}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
const renderBlogList = function () {
     noBlogPost()  

     allBlogData.forEach(blog => buildsBlogEntry(blog))
    //   if (nobloglist === false) {
    //     console.log('Display');
    //   } else {
    //     console.log('No Display');
    //   }
    }
    renderBlogList()