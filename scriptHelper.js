// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
    let checkList = document.getElementById(list)
    let pilotName = document.getElementById('pilotStatus')
    pilotName.innerHTML = `<li value=1>Pilot ${pilot} Ready</li>`
    let coPilotName = document.getElementById('copilotStatus')
    coPilotName.innerHTML = `<li value=2>CoPilot ${copilot} Ready`
    let fuel = document.getElementById('fuelStatus')
    if (fuelLevel < 10000){
         checkList.style = "visibility.visible";
         fuel.innerHTML = `<li value=3>${fuelLevel} is not enough fuel for the journey</li>`;
         event.preventDefault()  
    }
    
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;