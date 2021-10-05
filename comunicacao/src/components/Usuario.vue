<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <button @click="alterarNome"> Alterar Nome </button>
        {{nome}} {{idade}}
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome"           
                @nomeMudou="nome = $event"
                :reiniciarFn="reiniciarNome"
                :idade="idade"
                :alteraFn="alteraIdade"
            />
            <app-usuario-editar 
                :idade="idade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
     data() {
      return {
        nome: 'Fabricio',
        idade: 34
      }
    },
    methods:{
        alterarNome(){
            this.nome = 'Naht'
        },
        reiniciarNome(){
            this.nome = 'Fabricio'
        },
        alteraIdade(){
            this.idade = 37
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
