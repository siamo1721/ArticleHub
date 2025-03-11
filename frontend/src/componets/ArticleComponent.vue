<template>
  <div>
    <h1>Список статей</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content || 'Нет содержимого' }}</p>
        <small>Создано: {{ formatDate(article.createdAt) }}</small><br>
        <small>Обновлено: {{ formatDate(article.updatedAt) }}</small>
      </li>
    </ul>
  </div>

</template>

      <script>
import axios from "axios";
  export default {
    data() {
      return {
        articles: []
      }
    },
    mounted() {
      this.fetchArticles()
    },
    methods: {
      async fetchArticles() {
        try {
          const response = await axios.get('http://localhost:3000/api/articles')
          this.articles = response.data;
        } catch (error) {
          console.error(error)
        }
      },
      formatDate(dateString) {
        // Форматируем дату для удобного отображения
        const date = new Date(dateString);
        return date.toLocaleString(); // Можно настроить формат под свои нужды
      }
    }
  };


</script>


<style>

</style>