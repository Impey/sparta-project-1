const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');



let game = false;


// got to try and make if square[0] is clicked game starts with the color red


if (game == true) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].getAttribute("data-num")
    squares[i].setAttribute("class", "");
    squares[i].addEventListener("click", () => {
      onSquareClick(i)
      clicked = console.log(i);
    });
  }
}
function onSquareClick(i) {
  squares[i].setAttribute("class", "0");
  squares[i].style.backgroundColor = "red";

}



// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;

}
addEventListener('mousemove', tellPos, false)










