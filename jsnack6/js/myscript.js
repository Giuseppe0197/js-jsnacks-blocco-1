/* Genera un array di 50 numeri random. Nell’array non devono esserci doppioni. */



/* creiamo una variabile per stampare la lista dei numeri */

const listaNumeri = document.getElementById("lista");

/* creiamo un array vuota */

const numList = [];

console.log(numList);

/* andiamo a generare i numeri */



while (numList.length < 50){

    let numRandom = Math.floor(Math.random() * 100) + 1;

    if (numList.indexOf(numRandom) === -1){

        numList.push(numRandom);

    }
        
}


listaNumeri.innerHTML = numList;

/* verifichiamo che i numeri non vengano ripetuti all'interno dell'array */