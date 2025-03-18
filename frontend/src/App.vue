<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-spacer></v-spacer>
      <my-button text to="/">Список статей</my-button>
      <my-button text to="/create">Создать статью</my-button>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>



export default {

};
</script>

<style>

</style>
