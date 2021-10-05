<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <button @click="alterarIdade()">Alterar Idade</button>
        <button @click="alteraFn()">Alterar Idade (Callback)</button>
        <p>Idade {{idade}}</p>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    props:{
        idade: Number,
        alteraFn: Function
    }, 
    methods: {
        alterarIdade(){
            this.idade++
            barramento.alterarIdade(this.idade)
        },
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
