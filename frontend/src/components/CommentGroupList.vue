<template>
  <v-card>
    <v-card-title>Комментарии по статьям</v-card-title>
    <v-card-text>
      <template v-if="groupedComments && Object.keys(groupedComments).length > 0">
        <div v-for="(group, articleId) in groupedComments" :key="articleId" class="mb-6">
          <h3>{{ group.articleTitle }}</h3>
          <v-list>
            <v-list-item v-for="comment in group.comments" :key="comment.id">
              <v-list-item-content>
                <v-list-item-title>{{ comment.text }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span>Создан: {{ formatDate(comment.createdAt) }}</span>
                  <span v-if="comment.createdAt !== comment.updatedAt">
                    | Обновлён: {{ formatDate(comment.updatedAt) }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </template>
      <template v-else>
        <p>Нет комментариев за выбранный период.</p>
      </template>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    groupedComments: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
  },
};
</script>