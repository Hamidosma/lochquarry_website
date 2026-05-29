// BACK TO TOP BUTTON

function scrollToTop() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// CONTACT FORM MESSAGE

function showMessage() {

    alert("Thank you for contacting Lochquarry Outdoor Centre. We will reply soon.");

}


//these are the latest added stuff(#1)
// WELCOME MESSAGE

window.onload = function () {

    alert("Welcome to Lochquarry Outdoor Centre!");

}


// CHANGE BACKGROUND COLOUR

function changeBackground() {

    document.body.style.backgroundColor = "#f1f0c4";

}
//these are the latest added stuff (#1)


//these are the latest added stuff (#2)
// SHOW CURRENT DATE AND TIME

function showDateTime() {

    const today = new Date();

    document.getElementById("dateTime").innerHTML =
        today.toLocaleString();

}
//these are the latest added stuff (#2)


//these are the latest added stuff (#3)
// TOGGLE ACTIVITY INFORMATION

function toggleActivities() {

    const activities =
        document.getElementById("extraActivities");

    if (activities.style.display === "none") {

        activities.style.display = "block";

    } else {

        activities.style.display = "none";

    }

}
//these are the latest added stuff (#3)


//these are the latest added stuff (#5)
// ACTIVITY COUNTER

function countActivities() {

    const totalActivities = 10;

    alert("Lochquarry offers " + totalActivities + " activities!");

}
//these are the latest added stuff (#5)




