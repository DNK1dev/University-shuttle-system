// Demo ETA Updates

let etaBus1 = 4;
let etaBus2 = 6;

setInterval(() => {

    if(etaBus1 > 1){
        etaBus1--;
    }

    if(etaBus2 > 1){
        etaBus2--;
    }

    document.getElementById("eta1").innerText =
        "ETA: " + etaBus1 + " Minutes";

    document.getElementById("eta2").innerText =
        "ETA: " + etaBus2 + " Minutes";

    document.getElementById("tableEta1").innerText =
        etaBus1 + " mins";

    document.getElementById("tableEta2").innerText =
        etaBus2 + " mins";

}, 10000); // updates every 10 seconds

// Incident Report Submission

const incidentForm = document.getElementById("incidentForm");

incidentForm.addEventListener("submit", function(e){

    e.preventDefault();

    document.getElementById("successMessage").innerText =
        "Incident report submitted successfully.";

    incidentForm.reset();
});


// Shuttle Status Alerts Demo

const alertBox = document.getElementById("alertBox");

const alerts = [

    {
        message: "BUS-01 is operating normally.",
        className: "normal"
    },

    {
        message: "BUS-02 delayed by 10 minutes due to traffic.",
        className: "delay"
    },

    {
        message: "BUS-03 has broken down. Replacement shuttle dispatched.",
        className: "breakdown"
    }

];

let currentAlert = 0;

setInterval(() => {

    currentAlert++;

    if(currentAlert >= alerts.length){
        currentAlert = 0;
    }

    alertBox.className =
        "alert " + alerts[currentAlert].className;

    alertBox.innerText =
        alerts[currentAlert].message;

}, 8000);

// Welcome Message

window.onload = () => {
    console.log("University Shuttle Tracking System Loaded");
};