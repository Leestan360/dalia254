document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    console.log("The DOM has loaded");
});

const dataAPI = http

function fetchData(data) {
    fetch("http://localhost:3000/upcomingEvents")
    .then(res => res.json())
    .then(data => console.log(data))
}