const date = new Date();
const daysOfTheMonth = document.querySelector(".days3");
const dayOneIndex = date.getDay();
const previousMonths = document.querySelector(".previous-month")
const nextMonths = document.querySelector(".next-month");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

const makeCalendar = () => {
    date.setDate(1);

    const yesterDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const yesterDayButOne = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const indexOfLastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const comingDays = 7 - indexOfLastDay - 1;

    document.querySelector(".days1 h2").innerHTML = months[date.getMonth()];

    document.querySelector(".days1 p").innerHTML = new Date().toDateString();

    let days = "";

    for (let i = dayOneIndex; i > 0; i--) {
        days += `<div class="previous">${yesterDayButOne - i + 1}</div>`
    }

    for (let j = 1; j <= yesterDay; j++) {
        if (j === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="present">${j}</div>`;
        } else {
            days += `<div>${j}</div>`;
        }
    }

    for (let k = 1; k <= comingDays; k++) {
        days += `<div class="next-day">${k}</div>`
        daysOfTheMonth.innerHTML = days;
    }
};

previousMonths.addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    makeCalendar();
})

nextMonths.addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    makeCalendar();
})

makeCalendar();
