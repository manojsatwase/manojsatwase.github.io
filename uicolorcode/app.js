(function () {
  let hexColorCode = [
    "#1b1e24",
    "#366792",
    "#3276b1",
    "#1a1d24",
    "#d03941",
    "#333333",
    "#888888",
    "#814dbc",
    "#b880ec",
    "#3d414d",
    "#eeeeee",
    "#f0ebf7",
    "#dddddd",
    "#202127",
    "#393d4f",
    "#312e31",
    "#212121",
    "#f6bc58",
    "#d1cfd3",
    "#e7e5e7",
    "#fefefe",
    "#4688f1",
    "#64c457",
    "#ec6d33",
    "#8a6be8",
    "#e96767",
    "#801e18",
    "#1d272e",
    "#1e1e1e",
    "#333444",
    "#2d3339",
    "#212121",
    "#3693d8",
    "#1a69c5",
    "#4a90e2",
    "#f8f8f8",
    "#673ab7",
    "#fcfcfc",
    "#373f46",
    "#384b5c",
    "#3893cd",
    "#304150",
    "#1c2733",
    "#434a51",
    "#4ab5ef",
    "#202020",
    "#202123",
    "#f1f3f4",
    "#bbbdbd",
    "#e0e0e0",
    "#f6fafa",
    "#6ab9b9",
    "#e8fdf5",
    "#f9dcd1",
    "#f9f9fb",
    "#f6f6f6",
    "#193a69",
    "#f5f4f0",
    "#985fa7",
    "#77ecac",
    "#1c55e7",
    "#0d104c",
    "#2e2e3d",
    "#282837",
    "#0f1820",
    "#163e4c",
    "#3f8a86",
    "#493653",
    "#5f416f",
    "#10364f",
    "#1d5885",
    "#61283d",
    "#a63b64",
    "#c43d70",
    "#f1f1f2",
    "#0c2932",
    "#2681d6",
    "#1d5885",
    "#51ada7",
    "#614271",
    "#1e2c5e",
    "#f8ce6a",
    "#eb6268",
    "#5c80b2",
    "#bdd2dc",
    "#e3e3e3",
    "#e0ddcd",
    "#fcd846",
    "#5d6d73",
    "#4b9541",
    "#2c95fb",
    "#664893",
    "#4842df",
    "#f9fafb",
    "#6f7a8b",
    "#d54a2e",
    "#317891",
    "#29303B",
    "#392778",
    "#C1C1C1",
    "#1A2235",
    "#0C0F1D",
    "#2F2F2F",
    "#5DC0A6",
    "#4a4a4a",
    "#525252",
    "#212831",
    "#1A1D23",
    "#2956C6",
    "#4285F4",
    "#452FA0",
    "#4F9E59",
    "#2F695C",
    "#D8D9DB",
    "#121413",
    "#222323",
    "#c0c0c0",
    "#46A4C7",
    "#f2f2f2",
    "#202224",
    "#36393E",
    "#8E9297",
    "#677BC4",
    "#992",
    "#262A35",
    "#5C6378",
    "#383E4E",
    "#222222",
    "#000000",
    "#FBFBF8",
    "#EEEEEE",
    "#34495E",
    "#DE5DFA",
    "#E7F3F5",
    "#222E3A",
    "#4669B5",
    "#EAEDED",
    "#232F3E",
    "#131A23",
    "#485769",
    "#37475A",
    "#DDD",
    "#1E1E1C",
    "#343A40",
    "#212529",
    "#183153",
    "#F8F9FA"
  ];
  function createInputCode() {
    let box = document.querySelector(".color__box");
    let input;
    for (let hexcode of hexColorCode) {
      input += `<input type="text" class="boxs"  value=${hexcode} style="background-color:${hexcode}">`;
    }
    box.innerHTML = input;
  }
  createInputCode();

  function DisplayColorCode() {
    const InputText = document.getElementsByTagName("input");
    for (let InputTextEvent of InputText) {
      InputTextEvent.previousSibling.textContent = "";
      InputTextEvent.addEventListener("click", function () {
        InputTextEvent.select();
        document.execCommand("copy");
        InputTextEvent.value = "Copied";
        setTimeout(function () {
          for (let hexcode of hexColorCode) {
            InputTextEvent.value = hexcode;
          }
        }, 3000);
      });
    }
  }

  DisplayColorCode();
})();
