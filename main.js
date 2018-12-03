const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');
let game = false;
let clicks = [];
let red = false;
let green = false;





// Start points 
squares[0].addEventListener("click", () => {
  gameStart();
  console.log("Red started")
  red = true;
});

squares[3].addEventListener("click", () => {
  gameStart();
  console.log("Green started")
  green = true;

})

function settingBoard() {
  for (let i = 0; i < squares.length; i++) {
    if (game == true) {
      squares[i].getAttribute("data-num")
      squares[i].setAttribute("class", "");
      squares[i].addEventListener("click", () => {
        onSquareClick(i)
      });
    }
  }
}

//Chooses colour of square click
function onSquareClick(i) {

  if (green == true) {
    red = false;
    squares[i].setAttribute("class", "X");
    squares[i].style.backgroundColor = "green";
  }

  if (red == true) {
    green = false;
    squares[i].setAttribute("class", "0");
    squares[i].style.backgroundColor = "red";
  }

}
function gameStart() {
  console.log("gamestarting");
  game = true;
  settingBoard()
}

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;

}
addEventListener('mousemove', tellPos, false)










