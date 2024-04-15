<script setup>
import axios from "axios"
import { useRoute, useRouter } from "vue-router"
import {ref} from 'vue'

const route = useRoute()
const router = useRouter()

const poke = ref()


const back = ()=>{
    router.push('/cositas')
}

const getData = async () => {
    try {
        const {data} = await axios.get
        (`https://pokeapi.co/api/v2/pokemon/${route.query.name}`)
        console.log(data)
        poke.value=data
    } catch (error) {
        console.log(error);
        poke.value= null;
    }
}
getData()

console.log(route.query);
</script>

<template>
<div class="justify-self-auto">
    <div v-if="poke" >
        <img :src="poke?.sprites.front_default" alt="" class="bg-center flex-auto"/>
        <h2>Poke name: {{$route.query.name}}</h2>
    </div>
    <h1 v-else>No existe, adios"</h1>
        <button @click="back" class="bg-amber-400 p-2 m-3 rounded-lg text-xl ">Volver</button>
</div>

</template>