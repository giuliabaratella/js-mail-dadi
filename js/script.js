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

