new Vue({
    el:"#desafio",
    data:{
        nome: 'Douglas Gomes Modesto',
        idade: '33',
        image: 'https://cdn-images-1.medium.com/max/1200/1*nq9cdMxtdhQ0ZGL8OuSCUQ.jpeg',
    },

    methods: {
        IdadePor3(){
            return this.idade * 3;
        },
        NumeroRandomico(){
            return Math.random();
        }
    },
})