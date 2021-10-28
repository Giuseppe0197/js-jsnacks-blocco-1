/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */


/* creiamo la variabile per stampare la lista su dei numeri */

const listaNumeri = document.getElementById("lista");

/* creiamo una variabile richiesta */

let richiesta = 0;

/* creaimo un array vuoto */

const listaDispari = [];

console.log(listaDispari);

/* creiamo un ciclo for per chiedere all'utente di inserire 6 numeri mediante i prompt*/

for (let i = 0; i < 6; i++){

    richiesta = prompt("inserisci il numero");

    /* mettiamo la condizione per cui se il numero è dispari allora viene pushato, altrimenti no */

    if (richiesta % 2 != 0){

        listaDispari.push(richiesta);

    }

}

/* stampiamo la lista sul browser */

listaNumeri.innerHTML = `La lista dei numeri dispari è: ${listaDispari}`;

