const url = "https://api.adviceslip.com/advice";
let span = document.querySelector("span");
let advice = document.querySelector("h1");

// getting Data for URL Advice Slip and showing it on index page:
function displayData() {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(adviceData => {
        const adviceObj = adviceData.slip;
        advice.innerHTML = adviceObj.advice;
        span.innerHTML = "Advice #" + adviceObj.id;
    })
    .catch(err => {
        console.log(err);
    });
}

// Displaying data on windows load and button click:
window.onload = displayData();
