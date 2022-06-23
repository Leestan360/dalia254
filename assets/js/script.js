document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    console.log("The DOM has loaded");
});

const upcomingEventsData = "https://dahlia254-server.herokuapp.com/upcomingEvents";
const weddingsData = "https://dahlia254-server.herokuapp.com/weddings";
const usersData = "https://dahlia254-server.herokuapp.com/users";

const eventImage = document.getElementById("image");
const loginButton = document.getElementById("btn1");
const signUpButton = document.getElementById("btn2");

// loginButton.addEventListener("click", () => {
//     const userName = 
// })

