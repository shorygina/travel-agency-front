let button = document.getElementById('test');

button.onclick = function () {
    let book = {
        name: 'book',
        weight: 1,
        price: 600
    };
    let laptop = {
        name: 'laptop',
        weight: 2,
        price: 40000
    };
    let bin = {
        name: 'bin',
        weight: 2,
        price: 5000
    };
    let apt = {
        name: 'apt',
        weight: 4,
        price: 15000
    };
    let cot = {
        name: 'cot',
        weight: 1,
        price: 500
    };
    let all = {
        laptop: laptop,
        book: book,
        apt: apt,
        bin: bin,
        cot: cot,
        total_vol: 8
    };
    let xhr = new XMLHttpRequest(); // Creating new HTTP request
    xhr.open("POST", "/test", true); // Setting destination and type
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(encodeURI(JSON.stringify(all)));
    xhr.onreadystatechange = function () { // Waiting for the server's answer
        if (xhr.readyState == 4) { // The answer has been got
            if (xhr.status == 200) { // The server's returned code 200 (success)
                console.log(xhr.responseText);
            }
        }
    }
};