/*
Esercizio di oggi: **Vue Email List**

nome repo: **vue-email-list**

Descrizione:

Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

**Bonus**

Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const { createApp } = Vue;

createApp({
  data() {
    return {
      url: "https://flynn.boolean.careers/exercises/api/random/mail",

      emails: [],
      emailNums: 10,
      counter:0
    };
  },

  methods: {

    getApi() {

     for(let i = 0; i < this.emailNums; i++) {
       //Richiesta email da API
       axios
       .get(this.url)
       .then((response) => {
         this.emails.push(response.data.response);
         console.log(this.emails);
         this.counter++;
         if(this.counter === this.emailNums) {
          this.displayEmails();
         }
       })
       .catch((error) => {
         console.log(error);
       });
     };


    },

    displayEmails(index) {
      return this.emails[index];
    }

  },

  mounted() {
    console.log("Prova");
    this.getApi();
    console.log(this.emails);
  },
}).mount("#app");
