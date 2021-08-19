// import functions and grab DOM elements
import { getRandomThrow, doesUserWin, getPercent } from "./get-random-throw.js";

const playButton = document.querySelector('#guess');
//const Userchoice = document.querySelector('#choice');
const winLose = document.querySelector('#win-or-lose');
const winsEl = document.querySelector('#wins');
const lossesEl = document.querySelector('#losses');
const draws = document.querySelector('#draw');
const totalEl = document.querySelector('#total');
const percentage = document.querySelector('#percent');
const resetEl = document.querySelector('#reset');

let wins = 0; 
let losses = 0; 
let draw = 0; 
let total = 0;
let percent =0;  

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  playButton.addEventListener('click', () => {
    // pulling the computer generated guess
    const gamePlay = getRandomThrow();
    total++;
    // pulling the user selection upon click and turning into var.
    const checkedRadioButton = document.querySelector(':checked');
    const userChoice = checkedRadioButton.value;
    
    
    if (userChoice === gamePlay) {
        // eslint-disable-next-line no-const-assign
        draws++;
        draws.textContent = draws;
    } else if (doesUserWin(userChoice, gamePlay) === true) {
        wins++;
        winsEl.textContent = wins;
    } else if (doesUserWin(userChoice, gamePlay) === false) {
        losses++;
        lossesEl.textContent = losses;
    }
    
    let winning = (wins / total) * 100;
    percent = Math.round(winning);
    percentage.textContent = `Success: ${percent}%`;

    
});
resetEl.addEventListener('click',()=>{
  window.location.reload();
});
