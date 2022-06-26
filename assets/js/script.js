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
const showName = document.getElementById("userInputName");


//signup
const form = document.getElementById("sign-up");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const password = document.getElementById("userPassword");
const confirmPassword = document.getElementById("userPassword1");
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

// Login as user 
subButton.addEventListener("click", () => {
    alert("Welcome" + " " + username.value)
    const signIn = document.getElementById("signIn");
    signIn.style.display = "none";
    document.getElementById("userInputName").innerHTML = username.value;

})


// Hide login form
document.getElementById("x2").addEventListener("click", () => {
    const signIn = document.getElementById("signIn");
    signIn.style.display = "none";
})


// Display signup form
signUpButton.addEventListener("click", () => {
    const signUp = document.getElementById("register");
    signUp.style.display = "block";
});

// Hide signup form
document.getElementById("x1").addEventListener("click", () => {
    const signUp = document.getElementById("register");
    signUp.style.display = "none";
})


// View about event
document.getElementById("new").addEventListener("click", () => {
    document.getElementById("image").style.width = '40rem';
    document.getElementById("image").style.width = '30rem';
})


// Event listeners for footer buttons
document.getElementById("about1").addEventListener('click', () => {
    document.getElementById("charges").style.display = 'block';
})

// Hide about us
document.getElementById("x3").addEventListener('click', () => {
    document.getElementById("charges").style.display = 'none';
})

document.getElementById("home1").addEventListener('click', () => {
    window.location.assign("../../index.html");
})

document.getElementById("services4").addEventListener('click', () => {
    document.getElementById("services2").style.display = 'block';
})


// Hide services page
document.getElementById("x5").addEventListener('click', () => {
    document.getElementById("services2").style.display = 'none';
})

document.getElementById('contact1').addEventListener('click', () => {
    document.getElementById('services').style.display = 'block';
})

// Hide Contacts page
document.getElementById('x4').addEventListener('click', () => {
    document.getElementById('services').style.display = 'none';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUser = {userName: userName.value, email: userEmail.value, password: password.value, confirmPassword: confirmPassword.value};

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

    alert("Welcome" + " " + userName.value)
    // window.location = "../../index.html"
    document.getElementById("userInputName").innerHTML = userName.value;
    const signUp = document.getElementById("register");
    signUp.style.display = "none";

})
