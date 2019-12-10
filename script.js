let upwards = 0;

window.onload = function() {
  let dkp = document.getElementsByClassName("divDKPHeader")[0];
  dkp.innerHTML = '<a href="">Dkp</a>';

  dkp.addEventListener("click", function(event) {
    event.preventDefault();
    let list = document.getElementsByClassName("divTableRow");
    let sortedList = Array.prototype.slice.call(list);

    if (upwards == 0) {
      sortedList.sort((a, b) => {
        return (
          +b.getElementsByTagName("div")[2].innerHTML -
          +a.getElementsByTagName("div")[2].innerHTML
        );
      });
      upwards = 1;
    } else {
      sortedList.sort((a, b) => {
        return (
          +a.getElementsByTagName("div")[2].innerHTML -
          +b.getElementsByTagName("div")[2].innerHTML
        );
      });
      upwards = 0;
    }

    let table = document.getElementsByClassName("divTableBody")[0];

    for (let item of sortedList) {
      table.appendChild(item);
    }
  });
};
