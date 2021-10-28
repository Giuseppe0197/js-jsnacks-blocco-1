/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

/* creazione variabile per stampare sulla pagina il numero vincente */

const numeroVincente = document.getElementById("numero");

/* creazione dei prompt per far inserire i numeri all'utente */

const numeroUno = prompt("Inserisci il primo numero");

console.log(numeroUno);

const numeroDue = prompt("Inserisci il secondo numero");

console.log(numeroDue);

/* poniamo le condizioni per cui se un numero è maggiore viene stampato quello maggiore */

if (numeroUno > numeroDue){

    numeroVincente.innerHTML = `Il numero maggiore è: ${numeroUno}`;

} else if (numeroUno < numeroDue){

    numeroVincente.innerHTML = `Il numero maggiore è: ${numeroDue}`;

} else {

    numeroVincente.innerHTML = `Non c'è un numero maggiore, sono entrambi uguali!`;

}