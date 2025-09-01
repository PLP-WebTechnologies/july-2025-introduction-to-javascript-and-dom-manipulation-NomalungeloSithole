// ======================
// Part 1: JavaScript Basics
// ======================

// Variable declaration and conditional
const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

document.getElementById("checkPlanetBtn").addEventListener("click", () => {
    const userInput = document.getElementById("planetInput").value.trim();
    
    if (planets.includes(userInput)) {
        document.getElementById("planetResult").textContent = `${userInput} is a planet in the solar system!`;
    } else if (userInput === "") {
        document.getElementById("planetResult").textContent = `Please enter a planet name.`;
    } else {
        document.getElementById("planetResult").textContent = `${userInput} is not a planet in the solar system.`;
    }
});

// ======================
// Part 2: Functions
// ======================

// Function 1: Capitalize the first letter
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Function 2: Get a random planet
function getRandomPlanet() {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

// ======================
// Part 3: Loops
// ======================

// Loop 1: Display all planets in the ul
const planetList = document.getElementById("planetList");
for (let i = 0; i < planets.length; i++) {
    const li = document.createElement("li");
    li.textContent = capitalize(planets[i]);
    planetList.appendChild(li);
}

// Loop 2: Add random planet on button click
document.getElementById("addRandomPlanetBtn").addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = getRandomPlanet();
    planetList.appendChild(li);
});

// ======================
// Part 4: DOM Interactions
// ======================

// DOM Interaction 1: Toggle class for title color
document.getElementById("toggleBtn").addEventListener("click", () => {
    const title = document.getElementById("toggleTitle");
    title.classList.toggle("green");
    title.classList.toggle("red");
});

// DOM Interaction 2: Change background color dynamically
document.body.addEventListener("dblclick", () => {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

// DOM Interaction 3: Listen to input changes
document.getElementById("planetInput").addEventListener("input", (e) => {
    console.log("User typing:", e.target.value);
});
