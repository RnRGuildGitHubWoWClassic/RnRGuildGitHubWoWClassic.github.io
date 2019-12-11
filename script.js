let upwards = 0;

function addSorting(buttonClass, buttonName) {
  let dkp = document.getElementsByClassName(buttonClass)[0];
  dkp.innerHTML = `<a href="">${buttonName}</a>`;

  dkp.addEventListener("click", function(event) {
    event.preventDefault();
    let list = document.getElementsByClassName("divTableRow");
    let header = list[0];
    list[0].remove();
    let sortedList = Array.prototype.slice.call(list);

    if (upwards == 0) {
      if (buttonClass == "divDKPHeader") {
        sortedList.sort((a, b) => {
          return (
            +b.getElementsByTagName("div")[2].innerHTML -
            +a.getElementsByTagName("div")[2].innerHTML
          );
        });
      } else if (buttonClass == "divPlayerHeader") {
        sortedList.sort((a, b) => {
          return b
            .getElementsByTagName("div")[0]
            .textContent.localeCompare(
              a.getElementsByTagName("div")[0].textContent
            );
        });
      } else {
        sortedList.sort((a, b) => {
          if (
            b.getElementsByTagName("img")[0].getAttribute("src") <
            a.getElementsByTagName("img")[0].getAttribute("src")
          ) {
            return -1;
          }
          if (
            b.getElementsByTagName("img")[0].getAttribute("src") >
            a.getElementsByTagName("img")[0].getAttribute("src")
          ) {
            return 1;
          }
          if (
            +b.getElementsByTagName("div")[2].textContent <
            +a.getElementsByTagName("div")[2].textContent
          ) {
            return -1;
          }
        });
      }
      upwards = 1;
    } else {
      if (buttonClass == "divDKPHeader") {
        sortedList.sort((a, b) => {
          return (
            +a.getElementsByTagName("div")[2].textContent -
            +b.getElementsByTagName("div")[2].textContent
          );
        });
      } else if (buttonClass == "divPlayerHeader") {
        sortedList.sort((a, b) => {
          return a
            .getElementsByTagName("div")[0]
            .textContent.localeCompare(
              b.getElementsByTagName("div")[0].textContent
            );
        });
      } else {
        sortedList.sort((a, b) => {
          if (
            a.getElementsByTagName("img")[0].getAttribute("src") <
            b.getElementsByTagName("img")[0].getAttribute("src")
          ) {
            return -1;
          }
          if (
            a.getElementsByTagName("img")[0].getAttribute("src") >
            b.getElementsByTagName("img")[0].getAttribute("src")
          ) {
            return 1;
          }
          if (
            +a.getElementsByTagName("div")[2].textContent >
            +b.getElementsByTagName("div")[2].textContent
          ) {
            return 1;
          }
        });
      }
      upwards = 0;
    }

    let table = document.getElementsByClassName("divTableBody")[0];

    for (let item of sortedList) {
      table.appendChild(item);
    }
    table.prepend(header);
  });
}

window.onload = function() {
  addSorting("divDKPHeader", "DKP");
  addSorting("divPlayerHeader", "Player");
  addSorting("divClassHeader", "Class");
};
