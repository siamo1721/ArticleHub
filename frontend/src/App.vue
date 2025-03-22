<template>
  <v-app>
    <v-app-bar color="primary" dark>
      <v-spacer></v-spacer>
      <my-button text to="/">Список статей</my-button>
      <my-button text to="/create">Создать статью</my-button>
      <my-button text to="/filter">Поиск комментариев</my-button>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>



import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton}

};
</script>

<style>

</style>
