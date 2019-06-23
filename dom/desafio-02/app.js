new Vue({
    el:"#desafio",
    data: {
        valor: '',
    },

    methods: {
        disparaAlerta(){
            alert("Envento disparado");
        },

        preencherValor(event){
            this.valor = event.target.value;
        },

        preencherValorEnter(event){
            this.valor = event.target.value;
        }
    },
});