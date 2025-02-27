dice1 = document.querySelector('.img1');
dice2 = document.querySelector('.img2');
title = document.querySelector('h1');



function diceGenerator(dice){
    randomNumber = Math.random() * 6 + 1;
    randomNumber = Math.floor(randomNumber);
    src = "dice" + randomNumber + ".png";
    dice.setAttribute("src", `images/${src}`);
    return randomNumber
}

dice1 = diceGenerator(dice1);
dice2 = diceGenerator(dice2);

if (dice1 > dice2) {
    title.textContent = 'Player 1 Wins';
} else if (dice1 < dice2){
    title.textContent = 'Player 2 Wins';
} else {
    title.textContent = 'Draw!';
}

