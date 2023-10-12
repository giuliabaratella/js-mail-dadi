# js-mail-dadi

Mail<br>
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

possibile risoluzione: <br>
-creare html con input da cui raccogliere il valore immesso dall'utente <br>
-creare in js un array con la lista delle mail valide<br>
-creare un ciclo che controlli se il valore inserito dall'utente è = a uno degli elementi dell'array<br>
-con if/else:<br>
in caso affermativo far comparire un messaggio (inserimento div con testo nell'html) che valida la mail;<br>
altrimenti far comparire un messaggio di errore<br>



Gioco dei dadi<br>
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

possibile risoluzione:<br>
-creare sull'html un bottone per iniziare il gioco<br>
-su js, creare un evento al click del bottone<br>
-usare una funzione getRndInteger per generare un numero da 1 a 6<br>
-creare due variabili (una per il giocatore e una per il computer) il cui valore è un numero randomico<br>
-if/else: <br>
se valore del computer > valore giocatore far uscire un messaggio "hai perso";
altrimenti far uscire un messaggio "hai vinto"<br>