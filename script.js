const slots = document.querySelectorAll(".slot");


let bookings = JSON.parse(localStorage.getItem("bookings")) || {};


slots.forEach(function (button) {

    const room = button.dataset.room;
    const time = button.dataset.time;

    const bookingKey = room + "_" + time;


    if (bookings[bookingKey]) {
        button.classList.add("booked");
        button.disabled = true;
    }
    else {
        button.classList.add("available");
    }


    button.addEventListener("click", function () {

        if (bookings[bookingKey]) {
            alert("Slot already booked!");
            return;
        }

        bookings[bookingKey] = true;

        localStorage.setItem("bookings", JSON.stringify(bookings));

        button.classList.remove("available");
        button.classList.add("booked");

        button.disabled = true;

        alert("Booking successful!");
    });

});