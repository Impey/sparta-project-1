const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');
const btnReset = document.getElementById("resetBtn");
const colSelected = document.getElementById("colSelected")
let mouseIsDown = false;
let game = false;
let red = false;
let green = false;
let win = false;
// Start points 
squares[0].addEventListener("click", () => {
  gameStart();
  console.log("Red started")
  red = true;
  green = false;
});
squares[3].addEventListener("click", () => {
  gameStart();
  console.log("Green started")
  green = true;
  red = false;
})

function settingBoard() {

  for (let i = 0; i < squares.length; i++) {
    if (game == true) {
      squares[i].getAttribute("data-num")
      squares[i].setAttribute("class", "");
      squares[i].addEventListener('mousedown', function () { mouseIsDown = true })
      squares[i].addEventListener('mouseup', function () { mouseIsDown = false })
      squares[i].addEventListener('mousemove', function () {
        if (mouseIsDown) {
          onSquareClick(i)
          console.log("Hovering")

          if (win == true) {
            alert("Game is won")
            resetBoard();
          }
        }
      })
    }
  }
}
function onSquareClick(i) {
  if (green == true) {
    red = false;
    squares[i].setAttribute("class", "X");
    squares[i].style.backgroundColor = "green";
    colSelected.innerHTML = "Green colour selected"

  }
  if (red == true) {
    green = false;
    squares[i].setAttribute("class", "0");
    squares[i].style.backgroundColor = "red";
    colSelected.innerHTML = "Red colour selected"

  }

  WinCon();
}
function gameStart() {
  console.log("gamestarting");
  game = true;
  settingBoard()

}


btnReset.addEventListener("click", () => {
  resetBoard();

})

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[parseInt(i)].setAttribute("class", "clear");
    squares[i].style.backgroundColor = "white";
    game = false;
  }

}

function WinCon() {
  for (let i = 0; i < squares.length; i++) {
    if (squares[0, 1, 2, 4, 5, 6, 8, 9, 10].className == "0" && squares[3, 7, 11].className == "X") {
      win = true;
    }
  }
}

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;

}
addEventListener('mousemove', tellPos, false)


















