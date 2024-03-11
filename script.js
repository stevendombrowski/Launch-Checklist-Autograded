// Write your JavaScript code here!

// const { addDestinationInfo, myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let pilotName = document.querySelector('input[name = pilotName')
    let coPilot = document.querySelector('input[name = copilotName')
    let fuelLevel = document.querySelector('input[name = fuelLevel')
    let cargoMass = document.querySelector('input[name = cargoMass')
    let submit = document.getElementById('formSubmit')
    submit.addEventListener('click', function(){
        if (pilotName.value === "" || coPilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
            alert("ALL FIELDS NEED TO BE FILLED")
            event.preventDefault() 

        }
        formSubmission(document, "faultyItems", pilotName.value, coPilot.value, fuelLevel.value, cargoMass.value)
        
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image)
    })
    
 });