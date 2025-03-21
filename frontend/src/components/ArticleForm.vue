<template>
  <v-form>
    <v-text-field v-model="title" label="Название статьи" required></v-text-field>
    <v-textarea class="text" v-model="content" label="Содержание статьи" required></v-textarea>
    <my-button @click="saveArticle">Сохранить</my-button>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex';
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    ...mapActions('articles', ['createArticle']),
    async saveArticle() {
      if (!this.title || !this.content) {
        alert('Заполните все поля!');
        return;
      }

      const article = {
        title: this.title,
        content: this.content,
      };
      await this.createArticle(article);
      this.$router.push('/');
    },
  },
};
</script>

<style>

</style>