Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
      mailAttuale: '' ,
      listaMail: [],
    },
    mounted() {

        //Chiamata con ciclo for:
        for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.mailAttuale = result.data.response;
                this.listaMail.push(this.mailAttuale);
            });
        }
    }
});