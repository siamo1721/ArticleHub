<template>
  <v-table>
    <thead>
    <tr>
      <th>Название</th>
      <th>Содержание</th>
      <th>Дата добавления</th>
      <th>Дата изменения</th>
      <th>Действия</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="article in articles" :key="article.id">
      <td>{{ article.title }}</td>
      <td>{{ article.content }}</td>
      <td>{{ formatDate(article.createdAt) }}</td>
      <td>{{ formatDate(article.updatedAt) }}</td>
      <td>
        <v-btn small color="error" @click="deleteArticle(article.id)">Удалить</v-btn>
        <v-btn small color="primary" @click="editArticle(article.id)">Редактировать</v-btn>
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('articles', ['articles']),
  },
  methods: {
    ...mapActions('articles', ['getArticles', 'deleteArticle', 'updateArticle']),
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
    editArticle(id) {
      this.$router.push(`/edit/${id}`);
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style>

</style>