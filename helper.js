let numOfAdults = document.getElementById("num-of-adults").value;
let numOfChildren = document.getElementById("num-of-children").value;
let budget = document.getElementById("budget").value;
let typeOfChilling = document.getElementById("type-of-chilling").value;
let flightLength = document.getElementById("flight-length").value;

function val() {
    numOfAdults = document.getElementById("num-of-adults").value;
    numOfChildren = document.getElementById("num-of-children").value;
    budget = document.getElementById("budget").value;
    typeOfChilling = document.getElementById("type-of-chilling").value;
    flightLength = document.getElementById("flight-length").value;
}

function sendPreferences() {
    var obj = new Object();
    obj.number_of_adults = numOfAdults;
    obj.number_of_children = numOfChildren;
    obj.budget = budget;
    obj.type_of_chilling = typeOfChilling;
    obj.flight_length = flightLength;
    var jsonString = JSON.stringify(obj);
    console.log(typeOfChilling);
    let adress = "http://localhost:8083/choose?adults=" + numOfAdults + "&child=" + numOfChildren + "&budget=" + budget + "&type=" + typeOfChilling + "&flight=" + flightLength;
    window.location.replace(adress);
    /*axios.post("/choose", jsonString).then(function (request) {
        let verdict = console.log(request.request.response);
    });*/
}