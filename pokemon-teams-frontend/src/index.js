const BASE_URL = "http://localhost:3000";
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

document.addEventListener("DOMContentLoaded", () => {
  fetchTrainers();
});

function fetchTrainers() {
  fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainers => trainers.forEach(trainer => renderTrainer(trainer)));
}

function renderTrainer(trainer) {
  let extMain = document.querySelector("main");

  let newDiv = document.createElement("div");
  newDiv.classList.add("card");

  let newH2 = document.createElement("h2");
  newH2.innerText = trainer.name;

  let addBtn = document.createElement("button");
  addBtn.innerText = "Add Pokemon";

  addBtn.addEventListener("click", () => {
    addPokemon(trainer);
  });

  let newUl = document.createElement("ul");

  let eachPokemon = trainer.pokemons.forEach(pokemon => {
    let newLi = document.createElement("li");
    let releaseBtn = document.createElement("button");
    releaseBtn.innerText = "Release";
    releaseBtn.classList.add("release");
    newLi.innerText = `${pokemon.nickname} (${pokemon.species})`;
    newUl.append(newLi);
    newLi.append(releaseBtn)
    // newLi.addEventListener()
  });

  newDiv.append(newH2, addBtn, newUl);
  extMain.append(newDiv);
}

function addPokemon(trainer) {
  //if li node is 6 or more, error "you already have 6 pokemons"
  let liNode = document.querySelector("li");
  if (trainer.pokemons.length < 6) {
    fetch(POKEMONS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ trainer_id: trainer.id })
    })
        .then(resp => {
            return resp.json()
        })
      .then(console.log);
  } else {
    console.log("You have reached your maximum of 6 Pokemons");
  }
}
