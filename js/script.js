// email validator 

const validEmails = [
    'giuliab@boolean.com',
    'giuliab@gmail.com',
    'giuliab@yahoo.com'
]
const btn = document.querySelector('button');
console.log (validEmails, btn);

btn.addEventListener('click', function(){
    let emailCheck = document.getElementById('email').value ;
    let result = document.querySelector('.result');
    let check = false;

    for (let i = 0; i < validEmails.length; i++){
        
        let validMail = validEmails [i] ;
        console.log (validMail);

        if (validMail === emailCheck) {
            check = true;
        }
    }
    
    if (check) {
        console.log ('valido');
        result.innerHTML = 'La mail è valida';
    } else {
        console.log ('non valido');
        result.innerHTML = 'La mail non è valida, ritenta'
    }

})

// gioco dadi 


const divGiocatore = document.getElementById('n-dice-player');
const divComputer = document.getElementById('n-dice-computer');
const btnGame = document.querySelector('.button-game');
const winnerMsg = document.getElementById('winner');

console.log (divComputer, divGiocatore, winnerMsg);

btnGame.addEventListener ('click', function(){
    let dadoG = getRndInteger(1,7);
    let dadoC = getRndInteger(1,7);
    divComputer.innerHTML = dadoC;
    divGiocatore.innerHTML = dadoG;
    if (dadoG > dadoC) {
        winnerMsg.innerHTML = 'Hai vinto!';
        winnerMsg.classList.remove ('d-none');
        winnerMsg.classList.remove ('lose');
        winnerMsg.classList.remove ('draw');
        winnerMsg.classList.add ('win');
    } else if (dadoC > dadoG) {
        winnerMsg.innerHTML = 'Hai perso!'
        winnerMsg.classList.remove ('d-none');
        winnerMsg.classList.remove ('win');
        winnerMsg.classList.remove ('draw');
        winnerMsg.classList.add ('lose');
    } else {
        winnerMsg.innerHTML = 'Pareggio!'
        winnerMsg.classList.remove ('d-none');
        winnerMsg.classList.remove ('win');
        winnerMsg.classList.remove ('lose');
        winnerMsg.classList.add ('draw');
    }
})


function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min) ) + min;
}
 



