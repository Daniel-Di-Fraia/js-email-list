// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)


//richiamiamo la lista dal DOM
const listMail = document.querySelector(".list-group");

// settiamo ednpoint di API
const endPointApi = `https://flynn.boolean.careers/exercises/api/random/mail`;

//richiamiamo il bottone
const crea = document.querySelector(".btn");


//richiamiamo la funzione per le 10 mail in pagina
generateMail();

//pulsante che al click mi genera altre 10 mail
crea.addEventListener('click',generateMail)

//generiamo le 10 mail tramite una funzione
function generateMail(){
//creiamo una variabile dove pushare ogni li
let mailList = "";
for (let index = 0; index < 10; index++) {
    axios.get(endPointApi)
        .then(rispApi => {
            // codice da eseguire in caso di successo
            const result = rispApi.data.response;
            console.log(result);

            // aggiungiamo la mail alla variabile stringa vuota
            mailList += `<li class="list-group-item">${result}</li>`;
            
            listMail.innerHTML = mailList;
        })
        .catch(error => {
            // codice da eseguire in caso di errore
            console.error(error);
        });
}
}
