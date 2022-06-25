document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
});

// API data
const upcomingEventsData = "https://dahlia254-server.herokuapp.com/upcomingEvents";
const weddingsData = "https://dahlia254-server.herokuapp.com/weddings";
const usersData = "https://dahlia254-server.herokuapp.com/users";


// main buttons
const eventImage = document.getElementById("image");
const loginButton = document.getElementById("btn1");
const signUpButton = document.getElementById("btn2");
const signUpRedirect = document.getElementById("signOn");
const logInRedirect = document.getElementById("logOn")

//signup
const form = document.getElementById("sign-up");
const userName = document.getElementById("userName").value;
const userEmail = document.getElementById("userEmail").value;
const password = document.getElementById("userPassword").value;
const confirmPassword = document.getElementById("userPassword1").value;
const submitButton = document.getElementById("submit")


// Login
const username = document.getElementById("username");
const userPassword = document.getElementById("userPassword2");
const subButton = document.getElementById("submitIn");

// Display login form
loginButton.addEventListener("click", () => {
    const signIn = document.getElementById("signIn");
    signIn.style.display = "block";
});


// Display signup form
signUpButton.addEventListener("click", () => {
    const signUp = document.getElementById("register");
    signUp.style.display = "block";
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUser = {userName: userName, email: userEmail, password: password, confirmPassword: confirmPassword};

    fetch(usersData, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.log(error))

    window.location.href = "../../index.html"
    alert("Welcome" + " " + userName.value)
})