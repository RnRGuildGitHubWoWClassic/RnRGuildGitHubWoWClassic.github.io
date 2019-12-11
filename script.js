let upwards = 0;

function addSorting(buttonClass, buttonName) {
  let dkp = document.getElementsByClassName(buttonClass)[0];
  dkp.innerHTML = `<a href="">${buttonName}</a>`;

  dkp.addEventListener("click", function(event) {
    event.preventDefault();
    let list = document.getElementsByClassName("divTableRow");
    let sortedList = Array.prototype.slice.call(list);

    let header;

    if (upwards == 0) {
      if (buttonClass == "divDKPHeader") {
        header = sortedList[0];
        sortedList.sort((a, b) => {
          return (
            +b.getElementsByTagName("div")[2].innerHTML -
            +a.getElementsByTagName("div")[2].innerHTML
          );
        });
      } else {
        header = sortedList[0];
        sortedList.sort((a, b) => {
          return b
            .getElementsByTagName("div")[0]
            .textContent.localeCompare(
              a.getElementsByTagName("div")[0].textContent
            );
        });
      }
      upwards = 1;
    } else {
      if (buttonClass == "divDKPHeader") {
        header = sortedList[0];
        sortedList.sort((a, b) => {
          return (
            +a.getElementsByTagName("div")[2].textContent -
            +b.getElementsByTagName("div")[2].textContent
          );
        });
      } else {
        header = sortedList[0];
        sortedList.sort((a, b) => {
          return a
            .getElementsByTagName("div")[0]
            .textContent.localeCompare(
              b.getElementsByTagName("div")[0].textContent
            );
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
};
