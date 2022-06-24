document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
});

const upcomingEventsData = "https://dahlia254-server.herokuapp.com/upcomingEvents";
const weddingsData = "https://dahlia254-server.herokuapp.com/weddings";
const usersData = "https://dahlia254-server.herokuapp.com/users";

const eventImage = document.getElementById("image");
const loginButton = document.getElementById("btn1");
const signUpButton = document.getElementById("btn2");

loginButton.onclick = function() {
    document.getElementsById("signUp").style.display = "block";
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

function fetchUser() {
    fetch(usersData)
    .then(response => response.json())
    .then(data => console.log(data))
}

fetchUser()
