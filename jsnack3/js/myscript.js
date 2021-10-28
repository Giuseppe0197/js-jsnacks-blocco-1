/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */


/* creiamo una variabile per stampare la somma dei numeri sulla pagina  */

const totale = document.getElementById("somma");

/* creiamo dieci prompt per chiedere all'utente 10 numeri */

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

const numeroSette = prompt("Inserisci il settimo numero");

console.log(numeroSette);

const numeroOtto = prompt("Inserisci il ottavo numero");

console.log(numeroOtto);

const numeroNove = prompt("Inserisci il nono numero");

console.log(numeroNove);

const numeroDieci = prompt("Inserisci il decimo numero");

console.log(numeroDieci);

/* stampiamo sulla pagina la somma dei numeri scelti */

let sommaNumeri = `${numeroUno} + ${numeroDue} + ${numeroTre} + ${numeroQuattro} + ${numeroCinque} + ${numeroSei} + ${numeroSette} + ${numeroOtto} + ${numeroNove} + ${numeroDieci}`;

totale.innerHTML = sommaNumeri;