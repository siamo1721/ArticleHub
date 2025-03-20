<template>
  <v-container>
    <v-card class="mb-6">
      <v-card-title class="headline">
        {{ currentArticle.title }}
      </v-card-title>
      <v-card-text>
        <p>{{ currentArticle.content }}</p>
        <p><strong>Дата добавления:</strong> {{ formatDate(currentArticle.createdAt) }}</p>
        <p><strong>Дата изменения:</strong> {{ formatDate(currentArticle.updatedAt) }}</p>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title class="headline">
        Комментарии
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="comment in comments" :key="comment.id">
            <v-list-item-content>
              <v-list-item-title>{{ comment.text }}</v-list-item-title>
              <v-list-item-subtitle>
                {{ formatDate(comment.createdAt) }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('articles', ['currentArticle']),
    ...mapState('comments', ['comments']),
  },
  methods: {
    ...mapActions('articles', ['getArticle']),
    ...mapActions('comments', ['getComments']),
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
  async mounted() {
    const articleId = this.$route.params.id;
    await this.getArticle(articleId);
    await this.getComments(articleId);
  },
};
</script>

<style scoped>

</style>