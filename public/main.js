import * as datajs from "./modules/data.js";
const back_button = document.getElementById("back-button");
const main = document.getElementById("main");
const search_button = document.getElementById("search-button");
const search_container = document.getElementById("search-container");
const search_input = document.getElementById("search-input");

function loadHome() {
  back_button.classList.add("backButton");
  search_button.classList.remove("searchButton");
  search_container.classList.add("invisible");

  main.innerHTML = `
    <div>
    <h2>Favorites</h2>
    <div id="home-favorites" class="flex flex-wrap justify-around gap-2 mb-2 p-4">
        
    </div>
    <h2>More conversions</h2>
    <div id="home-options" class="flex flex-col gap-2 py-4">
        
    </div>
    </div>
      `;

  const home_favorites = document.getElementById("home-favorites");
  const home_options = document.getElementById("home-options");

  for (let i = 0; i < datajs.magnitudes.length; i++) {
    const name = datajs.magnitudes[i].name;
    const isFavorite = localStorage.getItem(name.toLowerCase());
    const icon = datajs.magnitudes[i].icon;

    const html_element_container = document.createElement("div");

    if (isFavorite == "true") {
      html_element_container.innerHTML = `
        <div
        id="${name.toLowerCase()}"
        class="magnitudeOpt magnitudeOptFavorite relative flex flex-col items-center justify-center w-24 h-24 p-2 || text-sm rounded cursor-pointer bg-neutral-100 dark:bg-neutral-500 hover:scale-110 dark:hover:bg-neutral-500 transition-all"
      >
        <div class="flex justify-center items-center w-12 h-12">${icon}</div>
        <p>${name}</p>
        <div class="favoriteButton isFav absolute top-1 right-1 flex justify-center items-center w-5 h-5 ml-auto" id="fav-${name.toLowerCase()}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" class="dark:fill-yellow-500 dark:stroke-yellow-500"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
        </div>
        </div>
        `;
      home_favorites.appendChild(html_element_container);
    } else {
      html_element_container.innerHTML = `
        <div 
        class="magnitudeOpt flex justify-between items-center w-full p-2 || text-sm rounded cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-500 transition-colors"
      >
        <div class="flex justify-center items-center w-5 h-5 mx-1">${icon}</div>
        <p>${name}</p>
        <div class="favoriteButton flex justify-center items-center w-5 h-5 ml-auto" id="fav-${name.toLowerCase()}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" class="stroke-neutral-200 fill-neutral-200 dark:stroke-neutral-600 dark:fill-neutral-600 hover:stroke-yellow-500 hover:fill-yellow-500 dark:hover:stroke-yellow-500 dark:hover:fill-yellow-500"><path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"/></svg>
        </div>
      </div>
        `;
      home_options.appendChild(html_element_container);
    }

    html_element_container.addEventListener("click", () => {
      console.log("Se ha hecho clic en el primer elemento");
      loadConverter(name, icon);
    });
  }

  addEventForFavBtn();
  checkIfTheyAreFavorites();
}

function toggleBackButton() {
  back_button.classList.remove("backButton");
  back_button.addEventListener("click", loadHome);
}

function loadConverter(magnitude_selected, magnitude_selected_icon) {
  toggleBackButton();

  main.innerHTML = `
  <div class="p-2">
  <h2 class="text-center p-2">${magnitude_selected}</h2>
  <div
    class="flex justify-center items-center w-12 h-12 mx-auto"
  >${magnitude_selected_icon}</div>
  </div>

  <div id="inputs-container" class="flex flex-col gap-3 p-2"></div>
  `;

  const inputs_container = document.getElementById("inputs-container");
  let maxInputs = 5;

  console.log(magnitude_selected.toLowerCase().replace(" ", ""));

  if (
    datajs[magnitude_selected.toLowerCase().replace(" ", "")].units.length < 5
  ) {
    maxInputs = 3;
  }

  for (let i = 0; i < maxInputs; i++) {
    const newInput = document.createElement("div");

    newInput.innerHTML = `
      <div
      class="flex w-full h-14 p-2 || bg-neutral-100 dark:bg-neutral-500 rounded border dark:border-neutral-600"
    >
      <div class="w-2/4">
        <select
          name=""
          id="unit-selector-${i}"
          class="unitSelector w-full || bg-neutral-100 dark:bg-neutral-500"
        >
        </select>
        <p id="unit-selector-name${i}" class="unitName text-neutral-400 dark:text-neutral-200 text-sm">
          
        </p>
      </div>
      <input
        type="number"
        name=""
        id="${i}"
        placeholder="0"
        class="input w-3/5 ml-auto || bg-neutral-100 dark:bg-neutral-500 text-right text-xl rounded"
      />
    </div>
    `;

    inputs_container.appendChild(newInput);
  }

  loadUnitOpts(magnitude_selected);
  addEventForInputs(magnitude_selected);
}

function loadUnitOpts(magnitude_selected_raw) {
  const magnitude_selected = magnitude_selected_raw.toLowerCase();
  const all_unit_selectors = document.querySelectorAll(".unitSelector");
  const all_unit_span = document.querySelectorAll(".unitName");

  for (let i = 0; i < all_unit_selectors.length; i++) {
    const select = all_unit_selectors[i];
    const span = all_unit_span[i];

    for (
      let b = 0;
      b <
      datajs[magnitude_selected.toLowerCase().replace(" ", "")].units.length;
      b++
    ) {
      const unit_opt = document.createElement("option");
      unit_opt.value = `${
        datajs[magnitude_selected.toLowerCase().replace(" ", "")].units_names[b]
      } | ${
        datajs[magnitude_selected.toLowerCase().replace(" ", "")].units[b]
      }`;
      unit_opt.textContent =
        datajs[magnitude_selected.toLowerCase().replace(" ", "")].units[b];
      select.appendChild(unit_opt);
    }

    select.addEventListener("input", (e) => {
      changeUnitNames(span, e.target.value);
    });

    select.selectedIndex = i;
  }

  loadUnitNames(magnitude_selected);
}

function changeUnitNames(span_selected, opt_selected) {
  const valuesArray = opt_selected.split("|");
  const value1 = valuesArray[0];

  span_selected.textContent = value1;
}

function loadUnitNames(magnitude_selected_raw) {
  const all_unit_selectors = document.querySelectorAll(".unitSelector");
  const all_unit_names = document.querySelectorAll(".unitName");
  const max_inputs = document.querySelectorAll(".input");

  for (let i = 0; i < max_inputs.length; i++) {
    const currentSelector = all_unit_selectors[i].value;
    const currentName = all_unit_names[i];

    const valuesArray = currentSelector.split("|");
    const newName = valuesArray[0];

    currentName.innerHTML = newName;
  }
}

function convert(e, magnitude_selected) {
  const inputs = document.querySelectorAll(".input");
  const inputNum = e.target.value;
  const input_selected = e.target;
  let unit_selected_array = document
    .getElementById(`unit-selector-${e.target.id}`)
    .value.split("|");
  let unit_selected = unit_selected_array[1].replace(/^ /, "");

  function calculate(inputNum, unit_entry, unit_output) {
    /*     console.log(
      `inputNum = ${inputNum}, unit_entry = ${unit_entry}, unit_output = ${unit_output}`
    ); */
    inputNum = Number(inputNum);
    let result = eval(
      datajs[magnitude_selected.toLowerCase().replace(" ", "")].formulas[
        unit_entry
      ][unit_output]
    );

    if (result == undefined) {
      result = inputNum;
    }

    /*     const decimals = result.toString().split(".")[1].length;

    if (decimals > 10) {
    } else if (decimals > 6) {
    } */

    return result;
  }

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const unit_output_array = document
      .getElementById(`unit-selector-${input.id}`)
      .value.split("|");
    const unit_output = unit_output_array[1].replace(/^ /, "");

    if (input === input_selected) {
      continue; // Ignorar el cálculo para el input seleccionado por el usuario
    }

    console.log(unit_selected, unit_output);

    let result = calculate(inputNum, unit_selected, unit_output);
    console.log(result);
    input.value = result;
  }
}

function addEventForInputs(magnitude_selected_raw) {
  const allInputs = document.querySelectorAll(".input");
  const magnitude_selected = magnitude_selected_raw.toLowerCase();
  const max_inputs = document.querySelectorAll(".input");

  for (let i = 0; i < max_inputs.length; i++) {
    const currentInput = allInputs[i];

    currentInput.addEventListener("input", (e) => {
      convert(e, magnitude_selected);
    });
  }
}

function addToFavorites(magnitude_selected) {
  const storedValue = localStorage.getItem(magnitude_selected);

  if (storedValue == "true") {
    localStorage.setItem(magnitude_selected, false);
  } else {
    localStorage.setItem(magnitude_selected, true);
  }

  loadHome();
}

function addEventForFavBtn() {
  const all_favButtons = document.querySelectorAll(".favoriteButton");

  for (let i = 0; i < all_favButtons.length; i++) {
    const element = all_favButtons[i];
    const element_id_raw = element.id;
    const element_id_array = element_id_raw.split("-");
    const element_id = element_id_array[1];

    element.addEventListener("click", (e) => {
      addToFavorites(element_id);
      e.stopPropagation();
    });
  }
}

function checkIfTheyAreFavorites() {
  const favorites_count = document.querySelectorAll(".magnitudeOptFavorite");
  const home_favorites = document.getElementById("home-favorites");

  if (favorites_count.length == 0) {
    home_favorites.innerHTML = `
    <div class="flex flex-col justify-center items-center w-full">
        <span class="text-neutral-400 dark:text-neutral-500 text-center"
          >No favorites found!!</span
        >
        <div class="flex justify-center items-center h-24 w-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="90px"
            height="90px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            class="fill-neutral-300 stroke-neutral-300 dark:fill-neutral-600 dark:stroke-neutral-600"
          >
            <path
              d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1l0,0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z"
            />
          </svg>
        </div>
        <p
          class="w-2/4 text-center text-neutral-400 dark:text-neutral-500 text-sm"
        >
          Click on the stars to add favorites
        </p>
      </div>
    `;
  }
}

/* BUSQUEDA */
function loadSearch() {
  search_input.value = "";
  main.innerHTML = "";
  back_button.classList.remove("backButton");
  back_button.addEventListener("click", loadHome);

  search_container.classList.remove("invisible");
  search_button.classList.add("searchButton");
}

function search(filter) {
  let filteredResults = [];
  datajs.magnitudes.forEach((element) => {
    const term = filter.toLowerCase();
    const name = element.name.toLowerCase();
    if (name.includes(term)) {
      filteredResults.push(element);
    }
  });
  generateResultsForSearch(filteredResults);
}

function generateResultsForSearch(filteredResults) {
  if (filteredResults.length == 0) {
    main.innerHTML = `
      <div class="flex flex-col justify-center items-center w-full">
      <span class="text-neutral-400 dark:text-neutral-500 text-center"
        >There are no results for the search performed</span
      >
    </div>
  `;
  } else {
    main.innerHTML = "";
    const results_container = document.createElement("div");
    results_container.classList.add(
      "flex",
      "flex-col",
      "gap-y-3",
      "w-full",

      "overflow"
    );
    main.appendChild(results_container);

    for (let i = 0; i < filteredResults.length; i++) {
      const result_name = filteredResults[i].name;
      const result_units = filteredResults[i].units;
      const result_icon = filteredResults[i].icon;
      const result = document.createElement("div");
      result.classList.add(
        "bg-white",
        "px-2",
        "rounded",
        "hover:bg-neutral-100",
        "dark:hover:bg-neutral-500",
        "transition-colors",
        "cursor-pointer",
        "w-full",
        "overflow-hidden"
      );

      result.innerHTML = `
        <p>${result_name}</p>
        <p class="text-sm text-neutral-400 dark:text-neutral-300">${result_units[0]} ${result_units[1]} ${result_units[2]} ...</p>
      `;

      results_container.appendChild(result);

      result.addEventListener("click", () => {
        loadConverter(result_name, result_icon);
      });
    }
  }
}

search_button.addEventListener("click", () => {
  loadSearch();
});

search_input.addEventListener("input", (e) => {
  search(e.target.value);
});

loadHome();
