document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    console.log("The DOM has loaded");
});

const upcomingEventsData = "https://dahlia254-server.herokuapp.com/upcomingEvents";
const weddingsData = "https://dahlia254-server.herokuapp.com/weddings";
const usersData = "https://dahlia254-server.herokuapp.com/users";

const eventImage = document.getElementById("image");

function eventOfTheDay(upcomingEvents) {
    const image1 = document.createElement("img")
    image1.innerHTML = upcomingEvents[0].image;
    eventImage.appendChild(image1);

}

function fetchEvents() {
    fetch(upcomingEventsData)
    .then(response => response.json())
    .then()
}