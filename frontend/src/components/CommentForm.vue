<template>
  <v-card class="mt-6">
    <v-card-title>Добавить комментарий</v-card-title>
    <v-card-text>
      <v-form @submit.prevent="submitComment">
        <my-text-area
            v-model="commentText"
            label="Ваш комментарий"
            required
            outlined
        ></my-text-area>
        <my-button type="submit" color="primary">Отправить</my-button>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import MyButton from "@/components/UI/MyButton.vue";
import MyTextArea from "@/components/UI/MyTextarea.vue";

export default {
  components: {MyTextArea, MyButton},
  data() {
    return {
      commentText: '',
    };
  },
  computed: {
    ...mapState('articles', ['currentArticle']),
  },
  methods: {
    ...mapActions('comments', ['createComment']),
    async submitComment() {
      const articleId = this.currentArticle.id;
      if (this.commentText.trim()) {
        await this.createComment({ articleId, comment: this.commentText });
        this.commentText = '';
      }
    },
  },
};
</script>

<style>

</style>