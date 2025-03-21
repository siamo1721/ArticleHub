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
      <td class="title-cell">{{ truncateText(article.title, 40) }}</td>
      <td class="content-cell">{{ truncateText(article.content, 60) }}</td>
      <td>{{ formatDate(article.createdAt) }}</td>
      <td>{{ formatDate(article.updatedAt) }}</td>
      <td>
        <my-button @click="deleteArticle(article.id)">Удалить</my-button>
        <my-button  @click="editArticle(article.id)">Редактировать</my-button >
        <my-button  @click="ArticleShow(article.id)">Просмотреть</my-button >
      </td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
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
    ArticleShow(id){
      this.$router.push(`/show/${id}`);
    },
    truncateText(text, maxLength) {
      return text.length > maxLength
          ? text.substring(0, maxLength) + '...'
          : text;
    }
  },
  mounted() {
    this.getArticles();
  },
};
</script>

<style>

</style>