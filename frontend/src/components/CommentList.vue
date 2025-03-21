<template>
  <v-container>
    <template v-if="currentArticle">
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
      <comment-form></comment-form>
      <v-card>
        <v-card-title class="headline">
          Комментарии
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="comment in comments" :key="comment.id">
              <v-list-item-content>
                <v-list-item-title style="white-space: normal; word-break: break-word">
                  {{ comment.text }}
                  <my-button @click="deleteComment(comment)">Удалить</my-button>
                  <my-button @click="startEdit(comment)">Редактировать</my-button>
                </v-list-item-title>
                <v-list-item-subtitle>
                 <span>
                    <strong>Создан:</strong> {{ formatDate(comment.createdAt) }}
                  </span>
                  <span> | </span>
                  <span>
                    <strong>Обновлён:</strong> {{ formatDate(comment.updatedAt) }}
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <comment-edit
                  v-if="editingCommentId === comment.id"
                  :comment="comment"
                  @save="saveComment"
                  @cancel="cancelEdit"
              ></comment-edit>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </template>
    <template v-else>
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </template>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import CommentForm from '@/components/CommentForm.vue';
import MyButton from "@/components/UI/MyButton.vue";
import CommentEdit from "@/components/CommentEdit.vue";

export default {
  components: {
    MyButton,
    CommentForm,
    CommentEdit,
  },
  data() {
    return {
      editingCommentId: null,
    };
  },
  computed: {
    ...mapState('articles', ['currentArticle']),
    ...mapState('comments', ['comments']),
  },
  methods: {
    ...mapActions('articles', ['getArticle']),
    ...mapActions('comments', ['getComments', 'deleteComment', 'updateComment']),
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleString();
    },
    deleteComment(comment) {
      this.$store.dispatch('comments/deleteComment', {
        id: this.currentArticle.id,
        commentId: comment.id,
      });
    },

    startEdit(comment) {
      this.editingCommentId = comment.id;
    },

    async saveComment({ id, text }) {
      await this.updateComment({
        id: this.currentArticle.id,
        commentId: id,
        comment: text,
      });
      this.editingCommentId = null;
    },
    cancelEdit() {
      this.editingCommentId = null;
    },
  },
  async mounted() {
    const articleId = this.$route.params.id;
    await this.getArticle(articleId);
    await this.getComments(articleId);
  },
};
</script>