const squares = document.getElementsByTagName("td")
let info = document.getElementById('info');
const btnReset = document.getElementById("resetBtn");
const btnCheck = document.getElementById("checkBtn");
const colSelected = document.getElementById("colSelected")
let mouseIsDown = false;
let game = false;
let win = false;

//color Booleans values
let green = false;
let yellow = false;
let lightBlue = false;
let red = false;
let blue = false;
let orange = false;
let startPoint = false;
//*****************************************************//
// MODIFIED TO ADD EXPECTED COLOUR AS STARTING ELEMENT 
// NOTE MUST MATCH CLASS IN CSS FILE //
//****************************************************//
const winCon = [
  ["green", 6, 12, 18],// green win 
  ["yellow", 7, 13, 19, 25, 31],// yellow win
  ["lightblue", 8], //Light blue win
  ["red", 21, 15, 9, 3], //Red win
  ["orange", 27, 28, 22, 16],// oragne win 
  ["blue", 11, 17, 23, 29, 35, 34, 33]//blue win
]
gameStart();
// Green Start points
squares[0].addEventListener("mousedown", () => {
  console.log("Green")
  green = true;
  yellow = false;
  lightBlue = false;
  red = false;
  orange = false;
  blue = false;
});
squares[24].addEventListener("click", () => {
  console.log("Green")
  green = true;
  yellow = false;
  lightBlue = false;
  red = false;
  orange = false;
  blue = false;
});
//Yellow start points/////////////////////////////
squares[1].addEventListener("mousedown", () => {//
  console.log("yellow")//
  yellow = true;///
  green = false;//
  lightBlue = false;//
  red = false;//
  oragne = false;
  blue = false;
});//
//
squares[30].addEventListener("click", () => {
  console.log("yellow")
  yellow = true;
  green = false;
  lightBlue = false;
  red = false;
  oragne = false;
  blue = false;
});
//Light Blue start points
squares[2].addEventListener("click", () => {
  console.log("light blue")
  squares[2].style.backgroundColor = "lightblue";
  lightBlue = true;
  yellow = false;
  green = false;
  red = false;
  blue = false;
});
squares[14].addEventListener("click", () => {
  console.log("light bue")
  lightBlue = true;
  yellow = false;
  green = false;
  red = false;
  blue = false;
});
//Red Start points
squares[4].addEventListener("click", () => {
  console.log("red")
  red = true;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
  orange = false;
});
squares[20].addEventListener("click", () => {
  console.log("red")
  red = true;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
  orange = false;
});
//orange start points
squares[26].addEventListener("click", () => {
  console.log("orange")
  orange = true;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
});
squares[10].addEventListener("click", () => {
  console.log("orange")
  orange = true;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
  blue = false;
});
//blue start points
squares[5].addEventListener("click", () => {
  console.log("blue")
  blue = true;
  orange = false;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
});
squares[32].addEventListener("click", () => {
  console.log("blue")
  blue = true;
  orange = false;
  red = false;
  lightBlue = false;
  yellow = false;
  green = false;
});



function settingBoard() {
  for (let i = 0; i < squares.length; i++) {
    if (game == true) {
      squares[i].getAttribute("data-num")
      //squares[i].setAttribute("class", "");
      squares[i].addEventListener('mousedown', function () { mouseIsDown = true })
      squares[i].addEventListener('mouseup', function () { mouseIsDown = false })
      squares[i].addEventListener('mousemove', function () {
        if (squares[i].getAttribute("class") === "startClass") {
          console.log("dont draw")
        }
        else if (mouseIsDown) {
          onSquareClick(i)

        }
      })
    }
  }
}
//Changes the colour of boxs that are hovered over whislt mouse click is down 
function onSquareClick(i) {




  if (green == true) {
    squares[i].setAttribute("class", "green");
    squares[i].style.backgroundColor = "green";
    colSelected.innerHTML = "Green colour selected"
  }
  if (yellow == true) {

    squares[i].setAttribute("class", "yellow");
    squares[i].style.backgroundColor = "yellow";
    colSelected.innerHTML = "Yellow Selected"
  }

  if (lightBlue == true) {
    squares[i].setAttribute("class", "lightblue");
    squares[i].style.backgroundColor = "lightblue";
    colSelected.innerHTML = "Light Blue selected"
  }
  if (red == true) {
    squares[i].setAttribute("class", "red");
    squares[i].style.backgroundColor = "red";
    colSelected.innerHTML = "Red selected"

  }
  if (orange == true) {
    squares[i].setAttribute("class", "orange");
    squares[i].style.backgroundColor = "orange";
    colSelected.innerHTML = "orange Selected"
  }
  if (blue == true) {
    squares[i].setAttribute("class", "blue");
    squares[i].style.backgroundColor = "blue";
    colSelected.innerHTML = "Blue selected"
  }
}
// Starts the game state
function gameStart() {
  //start points for green
  squares[0].style.background = "green";
  squares[24].style.background = "green"
  squares[0].setAttribute("class", "startClass");
  squares[24].setAttribute("class", "startClass");
  //start points for Yellow
  squares[1].style.background = "yellow"
  squares[30].style.background = "yellow"
  squares[1].setAttribute("class", "startClass");
  squares[30].setAttribute("class", "startClass");
  // start points for  light blue
  squares[2].style.background = "lightblue"
  squares[14].style.background = "lightblue"
  squares[2].setAttribute("class", "startClass");
  squares[14].setAttribute("class", "startClass");
  //start points for red
  squares[4].style.background = "red"
  squares[20].style.background = "red"
  squares[4].setAttribute("class", "startClass");
  squares[20].setAttribute("class", "startClass");
  // start points for orange
  squares[10].style.background = "orange"
  squares[26].style.background = "orange"
  squares[10].setAttribute("class", "startClass");
  squares[26].setAttribute("class", "startClass");
  // start point for blue
  squares[5].style.background = "blue"
  squares[32].style.background = "blue"
  squares[5].setAttribute("class", "startClass");
  squares[32].setAttribute("class", "startClass");
  // for (let i = 0; i < squares.length; i++) {
  //   squares[i].setAttribute("class", "clear");
  // }
  game = true;
  settingBoard()
}

//Button to check if player input is correct
btnCheck.addEventListener("click", () => {
  WinCondition();
})

//****************************************************//
// NEW WIN CONDITION MUCH MORE STREAMLINED
// WILL WORK WITH NEW COLOURS AS LONG AS THE CLASSES ARE CORRECTLY DEFINED
//****************************************************//
function WinCondition() {
  for (let i = 0; i < winCon.length; i++) { //Iterate through colours
    for (let j = 1; j < winCon[i].length; j++) { //Iterate through squares that make up colour, starting at element 1 as element 0 is the colour
      let winConColour = winCon[i][0]; //Get the first element, the name of the class we expect.
      if (squares[winCon[i][j]].getAttribute("class") !== winConColour) { //Check the squares class is the class written at the start.
        alert("incorrect tile expected: " + winConColour + " Got: " + squares[winCon[i][j]].getAttribute("class")); //if not vomit an error and break.
        return;
      }
    }
  }
  alert("Good Job"); //If completes with no error, reward!
}




//Button to reset the board 
btnReset.addEventListener("click", () => {
  resetBoard();

})

function resetBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[parseInt(i)].setAttribute("class", "clear");
    squares[i].style.backgroundColor = "white";
    colSelected.innerHTML = "";

    mouseIsDown = false;
    game = false;
  }

}
// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  info.innerHTML = 'Position X : ' + p.pageX + '<br />Position Y : ' + p.pageY;

}
addEventListener('mousemove', tellPos, false)




// not overriding starting points
// start page, instructions, game page
// onclick colour check 
// when colour checked - change the text first
// lets add one hardcoded level
// -> v2.0.0
// highlighting current colour using positionX and positionY - on box

// end of sprint 2
// automatically generated levels + obstacles/less colours

// sprint 3
// pipes