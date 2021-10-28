/* Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. */


/* creiamo la variabile per stampare la lista su dei numeri */

const listaNumeri = document.getElementById("lista");

/* creaimo un array vuoto */

const listaDispari = [];

console.log(listaDispari);

/* chiediamo all'utente di inserire sei numeri */

const numeroUno = prompt("Inserisci il primo numero");

console.log(numeroUno);

const numeroDue = prompt("Inserisci il secondo numero");

console.log(numeroDue);

const numeroTre = prompt("Inserisci il terzo numero");

console.log(numeroTre);

const numeroQuattro = prompt("Inserisci il quarto numero");

console.log(numeroQuattro);

const numeroCinque = prompt("Inserisci il quinto numero");

console.log(numeroCinque);

const numeroSei = prompt("Inserisci il sesto numero");

console.log(numeroSei);

/* creiamo il ciclo per generare una lista di al massimo 6 numeri */

while (listaDispari < 6){

    let numOne = numeroUno;

    let numeroTwo = numeroDue;

    let numThree = numeroTre;

    let numFour = numeroQuattro;

    let numFive = numeroCinque;

    let numSix = numeroSei;

    /* andiamo a verificare le condizioni per cui se il numero è dispari viene inseito nella lista,altrimenti viene scartato */

    if (numOne % 2 != 0){

        listaDispari.push(numOne);

    }

    if (numeroTwo % 2 != 0){

        listaDispari.push(numeroTwo);

    }

    if (numThree % 2 != 0){

        listaDispari.push(numThree);

    }

    if (numFour % 2 != 0){

        listaDispari.push(numFour);

    }

    if (numFive % 2 != 0){

        listaDispari.push(numFive);

    }

    if (numSix % 2 != 0){

        listaDispari.push(numSix);

    }

}

/* stampiamo sulla pagina la lista dei numeri dispari */

listaNumeri.innerHTML = `La lista dei numeri dispari è: ${listaDispari}`

