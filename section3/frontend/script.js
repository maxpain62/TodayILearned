const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

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
