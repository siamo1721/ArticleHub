<template>
  <v-container>
    <comment-filter @filter="fetchCommentsByPeriod"></comment-filter>
    <comment-group-list :groupedComments="commentsByPeriod"></comment-group-list>
  </v-container>
</template>

<script>
import CommentFilter from '@/components/CommentFilter.vue';
import CommentGroupList from '@/components/CommentGroupList.vue';
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    CommentFilter,
    CommentGroupList,
  },
  computed: {
    ...mapState('comments', ['commentsByPeriod']),
  },
  methods: {
    ...mapActions('comments', ['getCommentsByPeriod']),
    async fetchCommentsByPeriod({ dateFrom, dateTo }) {
      if (!dateFrom || !dateTo) {
        console.error('Даты начала и окончания обязательны.');
        return;
      }
      try {
        await this.getCommentsByPeriod({ dateFrom, dateTo });
      } catch (error) {
        console.error('Ошибка при загрузке комментариев:', error);
      }
    },
  },
};
</script>