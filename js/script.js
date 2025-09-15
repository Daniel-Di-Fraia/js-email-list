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

// chiamata AJAX
axios.get(endPointApi)
    .then(rispApi => {
        //codice da eseguire in caso di successo
        const result = rispApi.data.response;
        console.log(result);
        
        for (let index = 0; index < 10; index++) {
            listMail.innerHTML = `<li class=list-group-item>${result}</li>`;
        }

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })
