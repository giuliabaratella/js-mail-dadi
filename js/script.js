const validEmails = [
    'giuliab@boolean.com',
    'giuliab@gmail.com',
    'giuliab@yahoo.com'
]
const btn = document.querySelector('button');
let emailCheck = document.getElementById('email').value ;
console.log (validEmails, btn);

btn.addEventListener('click', function(){
    let check = false ;
    for (let i = 0; i < validEmails.length; i++){
        let validMail = validEmails [i] ;
        if (emailCheck === validMail){
            check = true ;
        } 
    }
    if (check = true){
        console.log ('valido');
    } else {
        console.log ('non valido');
    }
    
})


