<script setup>
import axios from "axios";
import { ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const senData = async (name, id, picture) => {
    await router.push({ name: "poke", query: { name: name, id: id, picture: picture } });
};

const cositas = ref([]);

const getData = async () => {
    try {
        const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
        cositas.value = data.results;
        } catch (error) {
        console.log(error);
        }
    };

getData();
</script>

<template>
<div class="m-0 p-1">
    <h1 class=" bg-green-200 font-sans md:font-serif">Hola mundo</h1>
    <h1 class="text-2xl font-bold underline text-center text-orange-400 ">Variedad de pokemones!</h1>
    <ul class="text-center bg-slate-100 m-5 grid grid-cols-2 h-auto p-1 ">
        <li v-for="cos in cositas" :key="cos" class="border-2 border-pink-200 m-1">
            <router-link to="/cositas/view" @click="senData(cos.name)">
                {{ cos.name }}
            </router-link>
        </li>
    </ul>
    <button class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4
            focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg
            dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3">Next</button>
    <button class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
            focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3" >Previous</button>
</div>
    <!-- <button class="m-9 p-3 rounded-lg bg-[#b339ac] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 outline-cyan-500" >fhfgfg</button> -->
</template>