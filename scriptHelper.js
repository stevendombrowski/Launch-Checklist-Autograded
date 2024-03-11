// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById('missionTarget')
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
    `
 }
 
 function validateInput(testInput) {
    if (testInput.trim() == ""){
        return "Empty"
    }
    else if (isNaN(testInput) === true){
        return "Not a Number"
    }
    else if (isNaN(testInput) === false){
        return "Is a Number"
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let checkList = document.getElementById('faultyItems')
    let launchStatus = document.getElementById('launchStatus')
    let pilotName = document.getElementById('pilotStatus')
    pilotName.innerHTML = `<li value=1>Pilot ${pilot} is ready for launch</li>`
    let coPilotName = document.getElementById('copilotStatus')
    coPilotName.innerHTML = `<li value=2>Co-pilot ${copilot} is ready for launch</li>`
    let fuel = document.getElementById('fuelStatus')
    let cargo = document.getElementById('cargoStatus')
    if (fuelLevel < 10000 && cargoLevel <= 10000){
        checkList.style.visibility = "visible";
        fuel.innerHTML = `<li value=3>Fuel level too low for launch</li>`;
        cargo.innerHTML = `<li value=4>Cargo mass low enough for launch</li>`
        launchStatus.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`
        launchStatus.style.color = 'red'
       //  checkList.preventDefault()  
     }
    if (fuelLevel < 10000 && cargoLevel < 10000){
       checkList.style.visibility = "visible";
       fuel.innerHTML = `<li value=3>Fuel level too low for launch</li>`;
       cargo.innerHTML = `<li value=4>Cargo mass low enough for launch</li>`
       launchStatus.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`
       launchStatus.style.color = 'red'
       // checkList. preventDefault()  
    }
    else if (fuelLevel >= 10000 && cargoLevel >= 10000){
       checkList.style.visibility = "visible";
       fuel.innerHTML = `<li value=3>Fuel level high enough for launch</li>`;
       cargo.innerHTML = `<li value=4>Cargo mass too heavy for launch</li>`
       launchStatus.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`
       launchStatus.style.color = 'red'
       // checkList.preventDefault()  
    }
    else if (fuelLevel < 10000 && cargoLevel >= 10000){
    checkList.style.visibility = "visible";
    fuel.innerHTML = `<li value=3>Fuel level too low for launch</li>`;
    cargo.innerHTML = `<li value=4>Cargo mass too heavy for launch</li>`
    launchStatus.innerHTML = `<h2>Shuttle Not Ready for Launch</h2>`
    launchStatus.style.color = 'red'
    // checkList.preventDefault()  
    }
    else if (fuelLevel >= 10000 && cargoLevel <= 10000){
        checkList.style.visibility = 'visible';
        launchStatus.innerHTML = `<h2>"Shuttle is Ready for Launch"</h2>`
        fuel.innerHTML = `<li value=3>Fuel level high enough for launch</li>`;
        cargo.innerHTML = `<li value=4>"Cargo mass low enough for launch"</li>;`
        launchStatus.style.color = 'green'
    }
 
}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    let planet = {};
    planet = planets[Math.floor(Math.random()*planets.length)]
    return planet
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;