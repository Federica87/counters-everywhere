const rootElement = document.querySelector("#root");

//Elements creation
const headerElement = document.createElement("header");
const mainElement = document.createElement("main");
const sectionElement = document.createElement("section");
const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
const addButton = document.createElement("button");
addButton.setAttribute("onclick", "addCounters()");
const removeButton = document.createElement("button");
removeButton.setAttribute("onclick", "removeCounters()");

//DOM creation
rootElement.appendChild(headerElement);
headerElement.appendChild(document.createElement("h1")).innerText =
  "COUNTERS OR NOT COUNTERS, THIS IS THE QUESTION";
headerElement.appendChild(addButton).innerText = "Add Counter";
headerElement.appendChild(inputElement);
headerElement.appendChild(removeButton).innerText = "Remove Counter";
rootElement.appendChild(mainElement);
mainElement.appendChild(sectionElement);

//Counters creation logic
let initialCounter = 0;
const counters = [];

//Function to Add Counters
function addCounters() {
  let numberCountersToAdd = inputElement.value;
  let sum = initialCounter + parseFloat(numberCountersToAdd);

  for (let i = 1; i <= sum; i++) {
    counters[i] = {
      id: i,
      value: 0,
    };
  }

  //Article creation
  for (let i = initialCounter; i < sum; i++) {
    const articleElement = document.createElement("article");
    const divElement = document.createElement("div");
    divElement.classList.add("counter-container");
    const increaseButton = document.createElement("button");
    increaseButton.setAttribute(
      "onclick",
      `handleCounter('increase', ${counters[i + 1].id} )`
    );
    const decreaseButton = document.createElement("button");
    decreaseButton.setAttribute(
      "onclick",
      `handleCounter('decrease', ${counters[i + 1].id} )`
    );
    const resetButton = document.createElement("button");
    resetButton.setAttribute(
      "onclick",
      `handleCounter('reset', ${counters[i + 1].id} )`
    );
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute(
      "onclick",
      `handleCounter('delete', ${counters[i + 1].id} )`
    );

    articleElement.setAttribute("id", `${counters[i + 1].id}`);
    sectionElement.appendChild(articleElement);
    articleElement.appendChild(
      document.createElement("li")
    ).innerText = `COUNTER ${parseFloat(i) + 1}`;
    articleElement.appendChild(divElement);
    divElement.appendChild(decreaseButton).innerText = "-";
    divElement.appendChild(document.createElement("p")).innerText = `${
      counters[i + 1].value
    }`;
    divElement.appendChild(increaseButton).innerText = "+";
    articleElement.appendChild(document.createElement("br"));
    articleElement.appendChild(resetButton).innerText = "Reset";
    articleElement.appendChild(deleteButton).innerText = "Delete Counter";
  }

  if (sum > initialCounter) {
    initialCounter = sum;
  }
  console.log(counters);
}

//function to Remove Counters
function removeCounters() {
  let numberCountersToRemove = inputElement.value;
  let minus = initialCounter - parseFloat(numberCountersToRemove);

  for (let i = initialCounter; i > minus; i--) {
    if (i > 0) {
      const elementToRemove = document.getElementById(`${i}`);
      elementToRemove.remove();
    }
  }

  if (initialCounter > minus) {
    initialCounter = minus;
  } else initialCounter = 0;
}

//function counter logic
function handleCounter(operation, id) {
  const articleElement = document.getElementById(`${id}`);
  const pElement = articleElement.querySelector("p");
  switch (operation) {
    case "increase":
      counters[id].value += 1;
      break;
    case "decrease":
      counters[id].value -= 1;
      break;
    case "reset":
      counters[id].value = 0;
      break;
    case "delete":
      articleElement.remove();
      break;
    default:
      return alert("Operazione non valida!");
  }
  pElement.innerText = `${counters[id].value}`;
}
