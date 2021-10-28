/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */



/* creiamo una variabile per stampare la parola */

const parole = document.getElementById("parola");

/* creiamo due prompt per far scrivere le parole all'utente */

const parolaUno = prompt("Inserisci una parola");

console.log(parolaUno);

const parolaDue = prompt("Inserisci un'altra parola");

console.log(parolaDue);

/* andiamo a definire condizioni per cui si scrive prima la parola più corta e poi qualla più lunga */

if (parolaUno.length > parolaDue.length){

    parole.innerHTML = `La parola corta è: ${parolaDue} e la parola lunga è: ${parolaUno}`;

} else if (parolaUno.length < parolaDue.length){

    parole.innerHTML = `La parola corta è: ${parolaUno} e la parola lunga è: ${parolaDue}`;

} else {

    parole.innerHTML = `Le parole sono lunghe uguali!`;

}