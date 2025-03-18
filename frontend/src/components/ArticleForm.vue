<template>
  <v-form>
    <v-text-field v-model="title" label="Название статьи" required></v-text-field>
    <v-textarea class="text" v-model="content" label="Содержание статьи" required></v-textarea>
    <my-button @click = "saveArticle">Сохранить</my-button>
  </v-form>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {


  data() {
    return {
      title: '',
      content: ''
    }
  },
  computed: {
    ...mapState('articles', ['articles']),
  },
  methods: {
    ...mapActions('articles', ['createArticle']),
    async saveArticle() {
      const article = {
        title: this.title,
        content: this.content,
      };
      await this.createArticle(article);
      this.title = '';
      this.content = '';

    },
  },
  mounted() {
    this.createArticle();
  },
}
</script>

<style>

</style>