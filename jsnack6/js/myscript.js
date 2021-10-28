/* Genera un array di 50 numeri random. Nell’array non devono esserci doppioni. */



/* creiamo una variabile per stampare la lista dei numeri */

const listaNumeri = document.getElementById("lista");

/* creiamo un array vuota */

const numList = [];

console.log(numList);

/* andiamo a generare i numeri */



/* while (numList.length < 50){

    let numRandom = Math.floor(Math.random() * 100) + 1;

    if (numList.indexOf(numRandom) === -1){

        numList.push(numRandom);

    }
        
} */

let i = 0;

let uguale = false;

let numRandom = 0;

/* impostiamo il numero di quanti cicli vogliamo */

while (numList.length < 50){

    /* se è il primo ciclo allora genera e pusha subito il numero nell'array perchè non serve il confronto dato che la lista è vuota */

    if(numList.lenght == 0){

        numRandom = Math.floor(Math.random() * 100) + 1;

        numList.push(numRandom);

    } else { /* generiamo il numero random e resettiamo la variabile uguale a falso così che se precedentemente era stata messa a true nei cicli precedenti non abbiamo il problema di vedere un confronto uguale a true anche se in realtà il numero generato è diverso da tutti quanti gli altri nell'array */

    /* riportiamo a 0 la variabile i perchè ad ogni generazione il nuovo numero vada confrontato con gli altri presenti nell'array */

        i = 0;

        numRandom = Math.floor(Math.random() * 100) + 1;

        uguale = false;

        /* inizio confronto con gli altri numeri */

        while (i < numList.length){

            /* se il numero generato è uguale all'elemento di indice i dell'array allora non è necessarioil confronto con gli altri, quindi i si imposta alla lunghezza dell'array e la variabile uguale è messa a true per capire ch il numero generato sia uguale a uno presente */

            if(numRandom == numList[i]){

                uguale = true;

                i = numList.lenght;

            } else {


                /* se il numero random è diverso dall'elemento di indice i dell'array, incremento di uno i per confrontarlo con quello successivo */

                i++

            }

        } 

        /* se il numero random è diverso da tutti gli altri già presenti, la variabile uguale non è stata posta uguale a true nel confronto, quindi il numero può essere messo nell'array. La lunghezza quindi viene incrementata di uno e si ricomincia il ciclo fino a una lunghezza tutale di 50 */

        if (uguale == false){

            numList.push(numRandom);

        }

    }

}


listaNumeri.innerHTML = numList;