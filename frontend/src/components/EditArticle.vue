<template>
  <v-form @submit.prevent="saveArticle">
    <v-text-field v-model="title" label="Название статьи" required></v-text-field>
    <v-textarea v-model="content" label="Содержание статьи" required></v-textarea>
    <my-button type="submit" color="primary">Сохранить</my-button >
    <my-button @click="cancel" color="secondary">Отмена</my-button >
  </v-form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data() {
    return {
      title: '',
      content: '',
    };
  },
  computed: {
    ...mapState('articles', ['currentArticle']),
  },
  methods: {
    ...mapActions('articles', ['updateArticle', 'getArticle']),
    async saveArticle() {
      const updatedArticle = {
        title: this.title,
        content: this.content,
      };

      try {
        await this.updateArticle({id: this.currentArticle.id, article: updatedArticle});
        this.$router.push('/');
      } catch (error) {
        console.error('Ошибка при обновлении статьи:', error);
      }
    },
    cancel() {
      this.$router.push('/');
    },
  },

  async mounted() {
    const articleId = this.$route.params.id;
      await this.getArticle(articleId);
      if (this.currentArticle) {
        this.title = this.currentArticle.title;
        this.content = this.currentArticle.content;
        }
      },
  };
</script>
<style>

</style>