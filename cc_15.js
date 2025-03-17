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
