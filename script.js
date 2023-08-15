"use strict";

// console.log(document.querySelector(".message").textContent);
// //js interact with the web page
// //DOM manipulation
// //document object model
// //
// document.querySelector(".message").textContent = "hey.";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 89;
// console.log(document.querySelector(".guess"));
// document.querySelector(".guess").value = 23;

// //handling click events
// //event listener
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(secretNumber);
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //when there is falsy value
  if (!guess) {
    document.querySelector(".message").textContent = "❌no number❌";

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🙌🎉correct number!";
    // document.body.style.backgroundImage = "url('img_mountain.jpg')";
    document.querySelector(".number").textContent = secretNumber;

    document.body.style.backgroundColor = "#f3f3f3";
    // document.querySelector("body").style.backgroundColor = " rgb(34,193,195)";
    /* background-color: #74b7c0; */

    document.querySelector(".number").style.width = "30rem";
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  }
  // document.querySelector(".highscore").textContent = score;
  // guess is more or less than the correct number
  // }
  // .else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "too high";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "you lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "🙄too high" : "😣too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😐you lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
