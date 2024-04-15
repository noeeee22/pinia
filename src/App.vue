<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <router-link href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse" to="/">
            <img src="@/assets/logo.svg" class="h-8" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">blablabla</span>
        </router-link>
        <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <router-link to="/" class="text-sm  text-gray-500 dark:text-white hover:underline">Home</router-link>
            <router-link to="/cositas" class="text-sm  text-blue-600 dark:text-white hover:underline">Pokemons</router-link>
        </div>
    </div>
</nav>


  <!-- <header class="m-5">

    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>

    <div class="bg-slate">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cositas">Cositas</RouterLink>
      </nav>

    </div>


  </header> -->
  <RouterView class="p-10 m-5"/>

</template>


