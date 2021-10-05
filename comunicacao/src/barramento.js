import Vue from 'vue'
export default new Vue({
    methods: {
        alterarIdade(idade) {
           this.$emit('alteraIdade',idade)
        },
        quandoNomeMudou(callback) {
            this.$on('alteraIdade',callback)
        }
    }
})