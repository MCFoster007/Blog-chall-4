// TODO: Create a variable that selects the form element

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const button = document.querySelector('.button');
const form = document.querySelector('form');
const errorElement = document.getElementById('error');

const handleFormSubmission = (event) => {
    event.preventDefault(); 

    if (username.value && title.value && content.value) {
        const blogData = {
            username: username.value,
            title: title.value,
            content: content.value
        };
        const allBlogData = JSON.parse (localStorage.getItem("userData")) || [];
        allBlogData.push(blogData)
        
        localStorage.setItem("userData", JSON.stringify(allBlogData));
        window.location.href = 'blog.html';
        username.value = '';
        title.value = '';
        content.value = '';
    } else {
        errorElement.textContent = "Error: Complete form."; 
        // alert("Please complete form");
    }
};

button.addEventListener('click', handleFormSubmission); 