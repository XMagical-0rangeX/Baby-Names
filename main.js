// Baby Names Data (Top 50 Boy/Girl 2022)
// Baby Center (babycenter.com)
// https://www.babycenter.com/baby-names/most-popular/top-baby-names#popularNameList

// Variables for html elements
let goBtn = document.getElementById("go-btn");
let menuSelect = document.getElementById("menu-select");
let container = document.getElementById("container");
let nameCountSpan = document.getElementById("name-count");

// Initialize Array of Character Objects from json file
let babyData = [];
fetch("baby-names-data.json")
  .then((res) => res.json())
  .then((data) => (babyData = data));

// Event Listener on Go Button
goBtn.addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = menuSelect.value;

  // Process Menu Selection
  if (selection === "display-all") {
    displayAll();
  } else if (selection === "gender") {
    searchGender();
  } else if (selection === "rank") {
    searchRank();
  } else if (selection === "starting-letter") {
    searchStartingLetter();
  } else if (selection === "length") {
    searchLength();
  }
}

// Display All Baby Names
function displayAll() {
  console.log("Display All");
  // Confirm data load
  console.log(babyData);
  resetCont();
  for (i=0;i<babyData.length;i++){
    babyCont(i);
  }
  nameCountSpan.innerHTML = babyData.length;
}

// Display Names by Gender
function searchGender() {
  console.log("Search By Gender");
  let val = prompt(`What Gender?(Boy/Girl)`);
  let num = 0;
  resetCont();
  for(i=0;i<babyData.length;i++){
    if (babyData[i].gender === val){
      babyCont(i);
      num++
    }
  }
  nameCountSpan.innerHTML = num;
}

// Display Names within a Range of Ranks
function searchRank() {
  console.log("Search By Rank");
  let minval = +prompt(`Minimum Rank: `);
  let maxval = +prompt(`Maximum Rank: `);
  let num = 0;
  resetCont();
  for (i=0;i<babyData.length;i++){
    if (babyData[i].rank <=minval&&babyData[i].rank>=maxval){
      babyCont(i);
      num++
    }
  }
  nameCountSpan.innerHTML = num;
}

// Display Names with Starting Letter
function searchStartingLetter() {
  console.log("Search by Starting Letter");
  let letterVal = prompt(`First letter of name: `)
  let num = 0;
  resetCont();
  for (i=0;i<babyData.length;i++){
    if (babyData[i].name.split("")[0] === letterVal){
      babyCont(i);
      num++
    }
  }
  nameCountSpan.innerHTML = num;
}

// Display Names with a Specific Length
function searchLength() {
  console.log("Search by Name Length");
  let wordLengthVal = +prompt(`Length of name: `)
  let num = 0;
  resetCont();
  for (i=0;i<babyData.length;i++){
    if (babyData[i].name.length === wordLengthVal){
      babyCont(i);
      num++;
    }
  }
  nameCountSpan.innerHTML = num;
}
function babyCont(i){
  container.innerHTML += `<b>${babyData[i].name}</b> (Rank: ${babyData[i].rank}, Gender: ${babyData[i].gender})<br>`
}
function resetCont(){
  container.innerHTML = "";
}