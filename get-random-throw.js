export function getRandomThrow(){
    const randomChoice = Math.round(Math.random() *3);
    //const choiceArray = ['rock', 'paper', 'scissors'];
    //return choiceArray[randomChoice];
    let compChoice; 

    if (randomChoice === 1) {
        compChoice = 'rock';
    } else if (randomChoice === 2) {
        compChoice = 'paper';
    } else if (randomChoice === 3) {
        compChoice = 'scissors';
    }

    return compChoice;
}

let draw = 0;


export function doesUserWin(userChoice, compChoice){
    if (userChoice === compChoice) {
        return draw; 
} else if (userChoice === 1 && compChoice === 2) {
        return 'lose';
// eslint-disable-next-line eqeqeq
} else if (userChoice == 1 && compChoice == 3){
        return 'win';
} else if (userChoice === 2 && compChoice === 3){
        return 'lose';
} else if (userChoice === 2 && compChoice === 1){
        return 'win'; 
} else if (userChoice === 3 && compChoice === 2){
        return 'win'; 
} else if (userChoice === 3 && compChoice === 1){
        return 'lose';
}
}

export function getPercent(wins,total){
    const percent = wins/total * 100; 
    const roundedPercent = Math.round(percent);

    return roundedPercent;
}
