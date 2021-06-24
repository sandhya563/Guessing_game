var readlineSync = require("readline-sync");

var userName = readlineSync.question("Please enter the your name: ");

console.log(`Hii ${userName} let's play the guessing game`);

var userChances = readlineSync.questionInt("how many times you want to guess: ");

console.log(`user chance ${userChances}`);

let randomNumber= Math.floor(Math.random() *10 + 1);

// console.log(`random number from computer ${randomNumber}`);

console.log(`Heey ${userName} you have total ${userChances} chance to guess the secret number`);

for ( var index = userChances; index > 0; index-- ){

    var userGuess = readlineSync.questionInt("Guess the number:");

    console.log(`Heey ${userName} you lost one more  chance ${index-1} to guess the secret number `);

    if (userGuess === randomNumber){
        console.log(`${userName} you won the game`);
        break
    }else if(userGuess < randomNumber){
        console.log(`${userName} you can go little higher`);

    }else if (userGuess > randomNumber){
        console.log(`${userName} you can go little lower`);

    }if (index === 0){
        console.log(`${userName} sorry you lost the game`);

    }
}if (index === 0){
        console.log(`${userName} sorry you lost the game`);

}
