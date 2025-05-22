/*console.log("Hello World!!");
let btnOpen = document.querySelector(".btn-open");
let factForm = document.querySelector(".fact-form");

let factList = document.querySelector(".fact-list");
factList.innerHTML = "";

btnOpen.addEventListener("click", function () {
  if (factForm.classList.contains("hidden")) {
    factForm.classList.remove("hidden");
    btnOpen.textContent = "close";
  } else {
    factForm.classList.add("hidden");
    btnOpen.textContent = "share a fact";
  }
});

function createFactList(dataArray) {
  let htmlArr = dataArray.map(
    (fact) =>
      `<li class="facts">
    <p class="fact-content">
    ${fact.text}
    <a class="source" href="${fact.source}"target="_blank">(Source)</a>
    <p>
    <span class="tags ${fact.category}">${fact.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factList.insertAdjacentHTML("afterbegin", html);
}
createFactList(initialFacts);*/

//chat gpt generated code v1
// const factList = document.getElementById("fact-list");

// // Reusable rendering function
// function createFactList(dataArray) {
//   let htmlArr = dataArray.map(
//     (fact) =>
//       `<li class="facts">
//         <p class="fact-content">
//           ${fact.text}
//           <a class="source" href="${fact.source}" target="_blank">(Source)</a>
//         </p>
//         <span class="tags ${fact.category}">${fact.category}</span>
//       </li>`
//   );
//   const html = htmlArr.join("");
//   factList.insertAdjacentHTML("afterbegin", html);
// }

// // Fetch facts from your Express backend
// async function fetchFacts() {
//   try {
//     const response = await fetch("/facts");
//     const data = await response.json();
//     createFactList(data);
//   } catch (error) {
//     console.error("Error fetching facts:", error);
//   }
// }

// fetchFacts();

//chat gpt v3

document.addEventListener("DOMContentLoaded", function () {
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
  let btnOpen = document.querySelector(".btn-open");
  let factForm = document.querySelector(".fact-form");

  btnOpen.addEventListener("click", function () {
    if (factForm.classList.contains("hidden")) {
      factForm.classList.remove("hidden");
      btnOpen.textContent = "close";
    } else {
      factForm.classList.add("hidden");
      btnOpen.textContent = "share a fact";
    }
  });

  const factList = document.querySelector(".fact-list"); // or "#factList", depending on your HTML
  fetchFacts();

  async function fetchFacts() {
    try {
      const res = await fetch("/facts");
      const data = await res.json();
      createFactList(data);
    } catch (err) {
      console.error("Error fetching facts:", err);
    }
  }

  function createFactList(dataArray) {
    const htmlArr = dataArray.map(
      (fact) =>
        `<li class="facts">
          <p class="fact-content">
            ${fact.text}
            <a class="source" href="${fact.source}" target="_blank">(Source)</a>
          </p>
          <span class="tags" style= "background-color: ${
            CATEGORIES.find((cat) => cat.name === fact.category).color
          }">${fact.category}</span>
        </li>`
    );
    const html = htmlArr.join("");
    factList.insertAdjacentHTML("afterbegin", html);
  }
});
