/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */



/* definiamo la variabile che stamperà il messaggio all'utente */

const inList = document.getElementById("inlista");

/* chiediamo all'utente il suo nome */

const nome = prompt("Inserisci il tuo nome per verificare che sia in lista");

console.log(nome);

/* definiamo una variabile per vero o falso */

let found = false;

/* creiamo un'array con i nomi degli invitati */

const listaInvitati = ["Gatsby", "Jennie", "Phil", "William", "Ernest", "Sharon", "Jessie"];

console.log(listaInvitati);

/* poniamo le condizioni per cui può entrare alla festa oppure no */

for (i = 0; i < listaInvitati.length; i++){

    if(nome === listaInvitati[i]){
        
        found = true;

    }

}

if (found == true){

    inList.innerHTML = `Salve ${nome}, il suo nome si trova in lista. Può partecipare alla festa`;

} else {

    inList.innerHTML = `Ci dispiace ma il suo nome non è in lista, la preghiamo di riprovare`;

}