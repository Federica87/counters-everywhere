const rootElement = document.querySelector("#root");

//Elements creation
const headerElement = document.createElement("header");
const h1Element = document.createElement("h1");
h1Element.innerText = "COUNTERS OR NOT COUNTERS, THIS IS THE QUESTION";
const mainElement = document.createElement("main");
const ulElement = document.createElement("ul");
const inputElement = document.createElement("input");
inputElement.type = "text";
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
  numberCounters += 1;

  counters[numberCounters] = {
    id: numberCounters,
    value: 0,
  };

  //Article creation
  const liElement = document.createElement("li");
  liElement.setAttribute("id", `${counters[numberCounters].id}`);
  const articleElement = document.createElement("article");
  const h2Element = document.createElement("h2");
  h2Element.innerText = `COUNTER ${numberCounters}`;
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
}

//function to Remove Counters
function removeCounter() {
  if (numberCounters > 0) {
    elementToRemove = document.getElementById(`${numberCounters}`);
    elementToRemove.remove();
    counters.pop();

    numberCounters -= 1;
  }
}

//function counter logic
function handleCounter(operation, id) {
  const articleElement = document.getElementById(`${id}`);
  const pElement = articleElement.querySelector("p");
  switch (operation) {
    case "increase":
      counters[id].value += 1;
      pElement.innerText = `${counters[id].value}`;
      break;
    case "decrease":
      counters[id].value -= 1;
      pElement.innerText = `${counters[id].value}`;
      break;
    case "reset":
      counters[id].value = 0;
      pElement.innerText = `${counters[id].value}`;
      break;
    case "delete":
      articleElement.remove();
      const index = counters.findIndex((counter) => counter?.id === id);
      counters.splice(index, 1);

      console.log(counters);
      break;
    default:
      return alert("Operazione non valida!");
  }
}
