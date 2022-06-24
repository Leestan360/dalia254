document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
});

// API data
const upcomingEventsData = "https://dahlia254-server.herokuapp.com/upcomingEvents";
const weddingsData = "https://dahlia254-server.herokuapp.com/weddings";
const usersData = "https://dahlia254-server.herokuapp.com/users";

const eventImage = document.getElementById("image");
const loginButton = document.getElementById("btn1");
const signUpButton = document.getElementById("btn2");
const signUpRedirect = document.getElementById("signOn");
const logInRedirect = document.getElementById("logOn")

//signup
const form = document.getElementById("sign-up");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword1");
const submitButton = document.getElementById("submit")


// Display login form
loginButton.addEventListener("click", () => {
    const signIn = document.getElementById("signIn");
    signIn.style.display = "block";
});


//Display signup form
signUpButton.addEventListener("click", () => {
    const signUp = document.getElementById("register");
    signUp.style.display = "block";
});

function renderLogin() {

}


function fetchData() {
    fetch(upcomingEventsData)
    .then(response => response.json())
    .then(data => console.log(data))
}

fetchData()

function fetchWedding() {
    fetch(upcomingEventsData)
    .then(response => response.json())
    .then(data => console.log(data))
}

fetchWedding()

function fetchUser(user1) {
    fetch(usersData, {
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(user1)
    })
    .then(response => response.json())
    .then(user => console.log(user))
}

fetchUser()


// Signup

setInterval(() => {
    if (userName.value == "" || userEmail.value == "" 
    || password.value == "" || confirmPassword == "") {
        submitButton.setAttribute("disabled", "");
    } else {
        submitButton.removeAttribute("disabled");
    }
})

submitButton.onclick = function () {
    window.location.href = "../../index.html";
    var username = userName.value;
    alert("Welcome" + " " + userName.value);
}