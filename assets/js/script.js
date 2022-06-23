document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    console.log("The DOM has loaded");
});

const upcomingEventsData = "http://localhost:3000/upcomingEvents";
const weddingsData = "http://localhost:3000/weddings";
const usersData = "http://localhost:3000/users";