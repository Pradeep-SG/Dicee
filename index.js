document.querySelector(".btn").addEventListener("click", rollDice);

function rollDice() {
  var randomNumber1 = Math.floor(6 * Math.random()) + 1;
  var randomNumber2 = Math.floor(6 * Math.random()) + 1;

  var str1 = "images/dice" + randomNumber1 + ".png";
  var str2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", str1);
  document.querySelector(".img2").setAttribute("src", str2);

  if (randomNumber1 > randomNumber2)
    document.querySelector(".container h1").textContent = "🚩Player 1 Wins!";
  else if (randomNumber1 < randomNumber2)
    document.querySelector(".container h1").textContent = "Player 2 Wins!🚩";
  else
    document.querySelector(".container h1").textContent = "🚩Draw!🚩";
}