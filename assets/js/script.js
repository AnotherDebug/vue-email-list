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

      firstEmail: "",
      secondEmail: "",
      thirdEmail: "",
      fourthEmail: "",
      fifthEmail: "",
      sixthEmail: "",
      seventhEmail: "",
      eighthEmail: "",
      ninthEmail: "",
      titheEmail: "",
    };
  },

  methods: {

    getApi() {

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.firstEmail = response.data.response;
          console.log(this.firstEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.secondEmail = response.data.response;
          console.log(this.secondEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.thirdEmail = response.data.response;
          console.log(this.thirdEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.fourthEmail = response.data.response;
          console.log(this.fourthEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.fifthEmail = response.data.response;
          console.log(this.fifthEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.sixthEmail = response.data.response;
          console.log(this.sixthEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.seventhEmail = response.data.response;
          console.log(this.seventhEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.eighthEmail = response.data.response;
          console.log(this.eighthEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.ninthEmail = response.data.response;
          console.log(this.ninthEmail);
        })
        .catch((error) => {
          console.log(error);
        });

      //Richiesta email da API
      axios
        .get(this.url)
        .then((response) => {
          this.titheEmail = response.data.response;
          console.log(this.titheEmail);
        })
        .catch((error) => {
          console.log(error);
        });


    },

  },

  mounted() {
    console.log("Prova");
    this.getApi();
  },
}).mount("#app");
