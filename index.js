document.addEventListener("DOMContentLoaded", () => {
    let get = document.getElementById("get");
    get.addEventListener("click", getIt)
    let punch = document.getElementById("punch");
    punch.addEventListener("click", punchIt)
 })

 const getIt = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
        //recieves http response and initiates parsing of response data
            return response.json();
        })
        .then(dataObj => {
        //recieves the parsed data after successful extractions/conversions
            displayJoke(dataObj.setup)
        //.setup is the key (punch-line)
        })
        .catch(err => {
            console.log("Not found", err)
        })
    displayJoke = (joke) => {
        let prevJoke = document.querySelector('p')
        if (!prevJoke) {
            let tellJoke = document.createElement('p');
            tellJoke.innerHTML = joke
            document.body.appendChild(tellJoke);
        } else {
            let newJoke = document.createElement('p')
            newJoke.innerHTML = joke
            prevJoke.parentNode.replaceChild(newJoke, prevJoke)
        }
    }
 }

 const punchIt = () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => {
        //recieves http response and initiates parsing of response data
            return response.json();
        })
        .then(dataObj => {
        //recieves the parsed data after successful extractions/conversions
            displayJoke(dataObj.punchline)
        //.setup is the key (punch-line)
        })
        .catch(err => {
            console.log("Not found", err)
        })
    displayPunchLine = (joke) => {
        let prevPunchLine = document.querySelector('p')
        if (!prevPunchLine) {
            let tellPunch = document.createElement('p');
            tellPunch.innerHTML = joke
            document.body.appendChild(tellPunch);
        } else {
            let newPunch = document.createElement('p')
            newPunch.innerHTML = joke
            prevPunchline.parentNode.replaceChild(newJoke, prevPunchline)
        }
    }
 }
 
 
 

 
 
