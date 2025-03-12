<template>
  <v-table>
    <thead>
    <tr>
      <th>Название</th>
      <th>Содержание</th>
      <th>Дата добавления</th>
      <th>Дата изменения</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="article in articles" :key="article.id">
      <td>{{ article.title }}</td>
      <td>{{ article.content }}</td>
      <td>{{ formatDate(article.createdAt) }}</td>
      <td>{{ formatDate(article.updatedAt) }}</td>
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
    ...mapActions('articles', ['getArticles']),
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style>
/* Стили, если нужны */
</style>