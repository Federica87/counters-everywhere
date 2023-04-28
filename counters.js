const rootElement = document.querySelector("#root");
let inputCounter = 0;

//Elements creation
const headerElement = document.createElement("header");
const h1Element = document.createElement("h1");
h1Element.innerText = "COUNTERS OR NOT COUNTERS, THIS IS THE QUESTION";
const mainElement = document.createElement("main");
const ulElement = document.createElement("ul");
const inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.value = `${inputCounter}`;
inputElement.addEventListener("change", handleNumberOfCounter);
const addButton = document.createElement("button");
addButton.innerText = "Add Counter";
addButton.addEventListener("click", addCounter);
const removeButton = document.createElement("button");
removeButton.innerText = "Remove Counter";
removeButton.addEventListener("click", removeCounter);

//DOM creation
rootElement.appendChild(headerElement);
headerElement.appendChild(h1Element);
headerElement.appendChild(addButton);
headerElement.appendChild(inputElement);
headerElement.appendChild(removeButton);
rootElement.appendChild(mainElement);
mainElement.appendChild(ulElement);

//Counters creation logic
let numberCounters = 0;
const counters = [];

//Function to Add Counters
function addCounter() {
  inputCounter += 1;
  inputElement.value = `${inputCounter}`;
  counters.push({
    id: parseFloat(numberCounters) + 1,
    value: 0,
  });

  //Article creation
  const liElement = document.createElement("li");
  liElement.setAttribute("id", `${counters[numberCounters].id}`);
  const articleElement = document.createElement("article");
  const h2Element = document.createElement("h2");
  h2Element.innerText = `COUNTER ${counters[numberCounters].id}`;
  const divElement = document.createElement("div");
  divElement.classList.add("counter-container");
  const pElement = document.createElement("p");
  pElement.innerText = `${counters[numberCounters].value}`;
  const increaseButton = document.createElement("button");
  increaseButton.innerText = "+";
  increaseButton.setAttribute(
    "onclick",
    `handleCounter('increase', ${counters[numberCounters].id} )`
  );
  const decreaseButton = document.createElement("button");
  decreaseButton.innerText = "-";
  decreaseButton.setAttribute(
    "onclick",
    `handleCounter('decrease', ${counters[numberCounters].id} )`
  );
  const resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.setAttribute(
    "onclick",
    `handleCounter('reset', ${counters[numberCounters].id} )`
  );
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete Counter";
  deleteButton.setAttribute(
    "onclick",
    `handleCounter('delete', ${counters[numberCounters].id} )`
  );

  ulElement.appendChild(liElement);
  liElement.appendChild(articleElement);
  articleElement.appendChild(h2Element);
  articleElement.appendChild(divElement);
  divElement.appendChild(decreaseButton);
  divElement.appendChild(pElement);
  divElement.appendChild(increaseButton);
  articleElement.appendChild(document.createElement("br"));
  articleElement.appendChild(resetButton);
  articleElement.appendChild(deleteButton);

  numberCounters += 1;
}

//function to Remove Counters
function removeCounter() {
  if (inputCounter > 0) {
    inputCounter -= 1;
    inputElement.value = `${inputCounter}`;
  }

  let ulElement = document.querySelector("ul");
  let liLastChild = ulElement.lastChild;
  if (liLastChild !== null) {
    liLastChild.remove();
  }
}

//function counter logic
function handleCounter(operation, id) {
  const articleElement = document.getElementById(`${id}`);
  const pElement = articleElement.querySelector("p");

  switch (operation) {
    case "increase":
      counters[id - 1].value += 1;
      pElement.innerText = `${counters[id - 1].value}`;
      break;
    case "decrease":
      counters[id - 1].value -= 1;
      pElement.innerText = `${counters[id - 1].value}`;
      break;
    case "reset":
      counters[id - 1].value = 0;
      pElement.innerText = `${counters[id - 1].value}`;
      break;
    case "delete":
      if (inputCounter > 0) {
        inputCounter -= 1;
        inputElement.value = `${inputCounter}`;
      }
      articleElement.remove();

      break;
    default:
      return alert("Operation is not valid!");
  }
}

//onchange input function
function handleNumberOfCounter() {
  if (inputElement.value >= 0) {
    let inputValue = inputElement.value;

    if (inputValue.match(/^[0-9]+$/)) {
      let minus = inputValue - inputCounter;
      if (minus >= 0) {
        for (let i = 0; i < minus; i++) {
          addCounter();
        }
      } else if (minus < 0) {
        for (let i = 0; i > minus; i--) {
          removeCounter();
        }
      }
    } else alert("The value is not valid!");
    inputCounter = +inputValue;
  }
}
