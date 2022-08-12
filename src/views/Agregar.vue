<template>
    <div>
        <h1>Agregar Tarea</h1>
        <form @submit.prevent='agregarTarea(nombre)'>
        
            <!-- <input type="text" v-model="nombre"> -->
            <!-- <input type="text" v-model="Dificultad"> -->

            <button type="submit" class="btn btn-dark" m>Agregar</button>

            <div class="input-group mb-2 mr-sm-2">
                <div class="input-group-prepend">
                    <div class="input-group-text">New Task</div>
                </div>
                <input type="text" class="form-control" v-model="nombre">
            </div>

        </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    name: 'Agregar',
    data() {
        return {
            nombre: '',
            // Dificultad: '',
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])//, 'agregarDificultad'])
    }

};
</script>
