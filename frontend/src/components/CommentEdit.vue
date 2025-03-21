<template>
  <v-card class="mt-4">
    <v-card-text>
      <my-text-area
          v-model="editedText"
          label="Редактировать комментарий"
          outlined
          rows="3"
      ></my-text-area>
    </v-card-text>
    <v-card-actions>
      <my-button @click="saveComment">Сохранить</my-button>
      <my-button @click="cancelEdit">Отмена</my-button>
    </v-card-actions>
  </v-card>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";
import MyTextArea from "@/components/UI/MyTextarea.vue";

export default {
  components: {MyTextArea, MyButton},
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editedText: this.comment.text,
    };
  },
  methods: {
    saveComment() {
      this.$emit('save', {
        id: this.comment.id,
        text: this.editedText,
      });
    },
    cancelEdit() {
      this.$emit('cancel');
    },
  },
};
</script>