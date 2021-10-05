<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>{{ inverter() }}</p>
        <p>Idade: {{idade}}</p>
        <button @click="reiniciarNome()">Reiniciar nome</button>
        <button @click="reiniciarFn()"> Reiniciar com Callback </button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
  props:{
      nome: {
          type: String,
          //required: true
          default: 'Anonímo' // Caso não exista nenhum valor é inserido Anonímo
      },
      reiniciarFn: Function,
      alteraFn: Function,
      idade: Number
  },
  methods:{
      inverter(){
          return this.nome.split('').reverse().join('')
      },
      reiniciarNome(){
          this.nome = 'Fabricio'
          this.$emit('nomeMudou', this.nome)
      }
  },
  created(){
     barramento.quandoNomeMudou(i =>{
         this.idade = i
     })
  }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
