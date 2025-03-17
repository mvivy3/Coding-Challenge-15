// TASK 1: CREATING THE BASE STRUCTURE
const riskDashboard = document.getElementById("riskDashboard"); // selecting the riskDashboard container
console.log("Risk Dashboard Loaded"); // print message to the console

// TASK 2: ADDING RISK ITEMS DYNAMICALLY
function addRiskItem(riskName, riskLevel, department) { // write a function
    const riskCard = document.createElement("div"); // create a new risk card
    riskCard.innerHTML = `
      <h3>${riskName}</h3>
      <p class="level">Risk Level: ${riskLevel}</p>
      <p>Department: ${department}</p>
    `;
    riskCard.classList.add("riskCard"); // assign a class to each card
    riskDashboard.appendChild(riskCard); // appends to the riskDashboard
  }
  // allow users to input a new risk using an HTML form
  document.getElementById("riskForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
  
    addRiskItem(riskName, riskLevel, department);
    this.reset();
  });
  // Test Cases
  addRiskItem("Data Breach", "High", "IT");
  addRiskItem("Supply Chain Disruption", "Medium", "Operations");

// TASK 3: REMOVING RISK ITEMS
function addResolveButton(riskCard) { // modify addRiskItem to include a "Resolve" button
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";
  
    resolveButton.addEventListener("click", function() { // when the button is clicked, remove the corresponding risk card
        riskDashboard.removeChild(riskCard);
    });
    riskCard.appendChild(resolveButton);
};
// Test Case
addRiskItem("Market Fluctuations", "High", "Finance");

// TASK 4: CATEGORIZING RISKS BY LEVEL
function applyRiskColor(riskCard, riskLevel) { // modify addRiskItem to apply different background
    if (riskLevel === "High") { 
        riskCard.style.backgroundColor = "red"; // high risk = red
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "yellow"; // medium risk = yellow
    } else if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "green"; // low risk = green
    }
}
const firstAddRiskItemWithResolve = addRiskItem; // applies background to original risk cases
addRiskItem = function(riskName, riskLevel, department) {
    firstAddRiskItemWithResolve(riskName, riskLevel, department);
    const lastRiskCard = riskDashboard.lastElementChild;
    applyRiskColor(lastRiskCard, riskLevel);
};
document.querySelectorAll(".riskCard").forEach(card => { // applies background to new risk cases
    const levelElement = card.querySelector(".level");
    const riskLevel = levelElement.textContent.replace("Risk Level: ", "");
    applyRiskColor(card, riskLevel);
});
// Test Cases
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");

// TASK 5: IMPLEMENTING BULK UPDATES
document.querySelectorAll(".riskCard").forEach(card => { // add a button to the dashboard labeled "Increase Risk Levels"
    const levelElement = card.querySelector(".level");
    let currentLevel = levelElement.textContent.replace("Risk Level: ", "");

    if (currentLevel === "Low") {
        levelElement.textContent = "Risk Level: Medium"; // changes low to medium
        applyRiskColor(card, "Medium");
    } else if (currentLevel === "Medium") { // changes medium to high 
        levelElement.textContent = "Risk Level: High";
        applyRiskColor(card, "High"); // high remains unchanged
    }
});
// Test Case
addRiskItem("Employee Retention", "Low", "HR");
// Clicking "Increase Risk Levels" should change it to "Medium".
