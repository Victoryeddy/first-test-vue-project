<script setup lang="ts">
import View from "@/components/View.vue";
import MyPokemon from "@/components/MyPokemon.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <p>Hello World</p>
    </div>
    <View element="div">
      <template #content>
        <p>Hello world again, its victory</p>
      </template>
    </View>
    <br/>
    <MyPokemon />
  </header>
</template>

<style scoped></style>
