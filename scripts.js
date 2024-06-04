document.getElementById("search-button").addEventListener("click", function () {
    let destination = document.getElementById("destination").value;
    let arrival = document.getElementById("arrival").value;
    let departure = document.getElementById("departure").value;
    let travellers = document.getElementById("travellers").value;
    let workTravel = document.getElementById("work-travel").checked;

    console.log("Search initiated with the following details:");
    console.log("Destination:", destination);
    console.log("Arrival:", arrival);
    console.log("Departure:", departure);
    console.log("Travellers:", travellers);
    console.log("Work Travel:", workTravel);
});
