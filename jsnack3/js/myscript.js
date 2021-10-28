/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* creiamo una variabile per stampare la somma dei numeri sulla pagina  */

const totale = document.getElementById("somma");

/* creiamo due variabili, una per la somma e una per il prompt */

let max = 0;

let richiesta = 0;

/* creiamo dieci prompt per chiedere all'utente 10 numeri */

for (let i = 0; i < 10; i++){

    /* forziamo il valore ad essere un numero invece di una stringa, quindi inseriamo un parseint nel prompt, altrimenti il numero inserito viene considerato una stringe e la somma dei numeri sarebbe la loro successione. es: 12345678910 anchichè la loro somma: 55 */

    richiesta = parseInt(prompt("inserisci un numero"));

    /* sommiamo i numeri e otteniamo il totale */

    max = max + richiesta;

}

/* stampiamo sulla pagina la somma dei numeri scelti */

totale.innerHTML = `La somma dei numeri è: ${max}`;