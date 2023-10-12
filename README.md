# js-mail-dadi

Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

possibile risoluzione: 
-creare html con input da cui raccogliere il valore immesso dall'utente
-creare in js un array con la lista delle mail valide
-creare un ciclo che controlli se il valore inserito dall'utente è = a uno degli elementi dell'array
-con if/else:
in caso affermativo far comparire un messaggio (inserimento div con testo nell'html) che valida la mail;
altrimenti far comparire un messaggio di errore



Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

possibile risoluzione:
-creare sull'html un bottone per iniziare il gioco
-su js, creare un evento al click del bottone
-usare una funzione getRndInteger per generare un numero da 1 a 6
-creare due variabili (una per il giocatore e una per il computer) il cui valore è un numero randomico
-if/else: 
se valore del computer > valore giocatore far uscire un messaggio "hai perso";
altrimenti far uscire un messaggio "hai vinto"