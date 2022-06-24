document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
});

const upcomingEventsData = "https://dahlia254-server.herokuapp.com/upcomingEvents";
const weddingsData = "https://dahlia254-server.herokuapp.com/weddings";
const usersData = "https://dahlia254-server.herokuapp.com/users";

const eventImage = document.getElementById("image");
const loginButton = document.getElementById("btn1");
const signUpButton = document.getElementById("btn2");

loginButton.addEventListener("click", () => {
    const signIn = document.getElementById("signIn");
    signIn.style.display = "block";
})

signUpButton.addEventListener("click", () => {
    const signIn = document.getElementById("register");
    signIn.style.display = "block";
})

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

function fetchUser() {
    fetch(usersData)
    .then(response => response.json())
    .then(data => console.log(data))
}

fetchUser()
