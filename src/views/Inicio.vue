<template>
    <div>
        <h1>lista de tareas </h1>
        
        <router-link to='/agregar' class="btn btn-success btn-block">
        Agragar
        <!-- <button class="btn btn-success btn-block" >Agregar</button> -->
        </router-link>
        <ul class="list-group mt-5">
            
            <li class="list-group-item"
                v-for="(item, index) in tareas" :key="index">
                {{item.nombre}}
                 <!-- - {{item.Dificultad}} - {{item.id}} -->
                <div class="float-right">

                    <router-link :to="{name: 'Editar', params: {id: item.id}}">
                    <button class="btn btn-dark ml-4">Editar</button>
                    </router-link>

                    <!-- <router-link> -->
                    <button class="btn btn-danger ml-2"  @click="eliminarTarea(item.id)">Eliminar</button>
                    <!-- </router-link> -->
                </div>

            </li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default ({
    name: 'Inicio',
    created(){
        this.getTareas();

    },
    methods:{
        ...mapActions(['getTareas','eliminarTarea'])
    },
    computed:{
        ...mapState(['tareas'])
    }
})
</script>
