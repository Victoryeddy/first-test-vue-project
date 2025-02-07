<script lang="ts" setup>
import {ref} from "vue"
import { type PokemonObject } from "@/Types/pokemon";

const pokemons = ref<PokemonObject[]>([]);

const getPokemon = async() => {
   const data = await fetch(`https://pokeapi.co/api/v2/pokemon`)
   const pokemon = await data.json();
   pokemons.value = pokemon.results;
} 
</script>

<template>
  <div>
    <button @click.prevent="getPokemon">Get Pokemon</button>

    <ul v-for="(pokemon, index) in pokemons">
     <li :key="index">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>
