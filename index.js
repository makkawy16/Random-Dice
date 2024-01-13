var number1 = Math.floor(Math.random() * 6 + 1);
var number2 = Math.floor(Math.random() * 6 + 1);

//change title
if (number1 > number2)
    document.querySelector("h1").innerHTML = "🚩 player 1 Wins"
else if (number2 > number1)
    document.querySelector("h1").innerHTML = "player 2 Wins 🚩"
else
    document.querySelector("h1").innerHTML = "Draw"

//first dice
var img = "./dice" + number1 + ".png"
document.querySelector(".img1").setAttribute("src", img);

//second dice
var img2 = "./dice" + number2 + ".png"
document.querySelector(".img2").setAttribute("src", img2);






// if (number1 === 0)
//     document.querySelector(".img1").src = "./images/dice1.png"
// else if (number1 === 1)
//     document.querySelector(".img1").src = "./images/dice2.png"
// else if (number1 === 2)
//     document.querySelector(".img1").src = "./images/dice3.png"
// else if (number1 === 3)
//     document.querySelector(".img1").src = "./images/dice4.png"
// else if (number1 === 4)
//     document.querySelector(".img1").src = "./images/dice5.png"
// else
//     document.querySelector(".img1").src = "./images/dice6.png"

// if (number2 === 0)
//     document.querySelector(".img2").src = "./images/dice1.png"
// else if (number2 === 1)
//     document.querySelector(".img2").src = "./images/dice2.png"
// else if (number2 === 2)
//     document.querySelector(".img2").src = "./images/dice3.png"
// else if (number2 === 3)
//     document.querySelector(".img2").src = "./images/dice4.png"
// else if (number2 === 4)
//     document.querySelector(".img2").src = "./images/dice5.png"
// else
//     document.querySelector(".img2").src = "./images/dice6.png"