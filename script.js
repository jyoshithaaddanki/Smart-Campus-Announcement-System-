// Event registration from event card

function registerEvent(eventName) {

    document.getElementById("eventSelect").value = eventName;

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


// Registration form

function submitRegistration(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;

    let selectedEvent = document.getElementById("eventSelect").value;

    alert(
        "Registration Successful!\n\n" +
        "Name: " + name +
        "\nEvent: " + selectedEvent
    );

    document.getElementById("participantCount").innerText = "451";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("eventSelect").value = "";

}


// Search events

function searchEvents() {

    let search =
        document.getElementById("searchBox").value.toLowerCase();

    let events =
        document.querySelectorAll(".event-card");

    events.forEach(function(card) {

        let text = card.innerText.toLowerCase();

        if (text.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// Dark mode

function changeTheme() {

    document.body.classList.toggle("dark");

    let button =
        document.getElementById("themeButton");

    if (document.body.classList.contains("dark")) {

        button.innerText = "☀️ Light Mode";

    } else {

        button.innerText = "🌙 Dark Mode";

    }

}