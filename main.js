const squares = document.getElementsByTagName("td")


for (let i = 0; i < squares.length; i++) {
  squares[i].getAttribute("data-num")

  squares[i].setAttribute("class", "");
  squares[i].addEventListener("click", () => {
    console.log("Tile clicked" + i);
    onSquareClick(i)
  });
}




function onSquareClick(i) {
  if (playersTurn == true) {
    squares[i].setAttribute("class", "0");
    squares[i].innerHTML = "0";
  }
}








