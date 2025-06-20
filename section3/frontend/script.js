const { useState } = require("react");

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const factFormBtn = document.getElementById("factButton");
const factForm = document.querySelector(".factForm");
const [currentCategory, setCurrentCategory] = useState("all");

factFormBtn.addEventListener("click", (event) => {
  if (factForm.classList.contains("hidden")) {
    factForm.classList.remove("hidden");
    factFormBtn.innerHTML = "close";
  } else {
    factForm.classList.add("hidden");
    factFormBtn.innerHTML = "share a fact";
  }
});

async function displayDataFunction() {
  const displayData = await fetch("http://localhost:8000/getData");
  console.log("this is display data", displayData, "test");
  const data = await displayData.json();
  generateFactList(data);
}
displayDataFunction();

const categoryFilterBtnList = document.querySelector(".categoryFilterBtn");
categoryFilterBtnList.innerHTML = "";

const factListGenerator = document.querySelector(".facts ul");
factListGenerator.innerHTML = "";

const categoryDropDown = document.getElementById("categoryDropDown");

function createCategoryOptions() {
  const categoryOptions = CATEGORIES.map(
    (cat) => `<option>${cat.name}</option>`
  );
  categoryDropDown.insertAdjacentHTML("beforeend", categoryOptions);
}
createCategoryOptions();

function createCategoryFilterBtn() {
  const htmlArray = CATEGORIES.map(
    (cat) =>
      `<li>
      <button style="background-color: ${cat.color}" class="btn categoryBtn categoryFilterChild">${cat.name}</button>
    </li>`
  );
  const html = htmlArray.join("");
  categoryFilterBtnList.insertAdjacentHTML("afterbegin", html);
}
createCategoryFilterBtn();

function filterWithButton() {}

function generateFactList(dataArray) {
  const factArray = dataArray.map(
    (fact) =>
      `<li class="factlist">
     <div class="factlistchild1">
      <p>${fact.text}</p>
      <span class="tag ${fact.category}">${fact.category}</span>
    </div>
    <div class="voteBtn">
      <button>👍${fact.votesInteresting}</button>
      <button>🤯${fact.votesMindblowing}</button>
      <button>⛔${fact.votesFalse}</button>
    </div>
  </li>`
  );
  const htmlFacts = factArray.join("");
  factListGenerator.insertAdjacentHTML("afterbegin", htmlFacts);
}
