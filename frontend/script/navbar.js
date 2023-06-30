/*NavBar import*/
import { navbar, footer } from "../components/nav.js";


let navbarContainer = document.getElementById("NAVBAR");
navbarContainer.innerHTML = navbar();

let footercontainer = document.getElementById("FOOTER");
footercontainer.innerHTML = footer();

window.addEventListener("load", () => {
  let userName = localStorage.getItem("username");
  if (userName) {
    ifUser();
  }
})



/*Hamburger Menu */
var hamburger_menu = document.querySelector(".hamburger");
var button = hamburger_menu.querySelector(".hamburger-menu");
button.addEventListener("click", (event) => {
  hamburger_menu.classList.toggle("open");
});

/* Nav Search Hints */
var nav_search = document.querySelector(".navbar-search");
var search = nav_search.querySelector(".searchbox");
var search_hint = nav_search.querySelector(".searchbox-hints");
var search_btn = document.querySelector(".search-btn");
var search_input = search.querySelector("input");

search.addEventListener("click", () => {
  search_hint.classList.add("open");
});

window.addEventListener("click", function (e) {
  if (!(nav_search.contains(e.target) || search_btn.contains(e.target))) {
    search_hint.classList.remove("open");
  }
});

search_btn.addEventListener("click", () => {
  if (!nav_search.classList.contains("open")) {
    search_hint.classList.remove("open");
  }
  nav_search.classList.toggle("open");
  search_input.focus();
  setTimeout(() => {
    search_hint.classList.toggle("open");
  }, 50);
});



const ques = document.querySelector('#ques')
const searching = document.querySelector('#searching');
ques.addEventListener("input", () => {
  searching.style.display = "block";
  searching.addEventListener('click', async function (event) {

    setTimeout(() => {
      search_hint.classList.remove("open");
    }, 50);

    let q = document.getElementById("ques").value

    localStorage.setItem("query", q)

    if (window.location.href == "https://devquery.netlify.app/") {
      window.location.href = "https://devquery.netlify.app/html/home.html"
    }
    else if (window.location.href == "https://devquery.netlify.app/index.html") {
      window.location.href = "https://devquery.netlify.app/html/home.html"
    }
    else window.location.href = "home.html"

  });
})






function ifUser() {
  let parentName = document.getElementById("user-info")
  let name = document.getElementById("user-name");
  let userName = localStorage.getItem("username");

  let loginbtn = document.getElementById("in_login");
  let signupbtn = document.getElementById("in_signup");
  if (userName) {
    name.innerText = "Hello " + userName.split(" ").slice(0, 1);
    loginbtn.innerText = "Log out"
    signupbtn.style.display = "none"
    if (loginbtn.innerText == "Log out") {
      loginbtn.addEventListener("click", () => {
        localStorage.clear("username")
      })
    }
  } else {
    parentName.innerHTML = ""
  }
}

// Assuming the URL is: https://example.com/?name=John&age=25

// Get the URL search parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the value of a specific query parameter
const username = urlParams.get('name');
const token = urlParams.get('token');
if (username && token) {

  localStorage.setItem("token", token)
  localStorage.setItem("username", username)
  ifUser()
}


