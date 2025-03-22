<template>
  <v-card class="mb-6">
    <v-card-title>Фильтр комментариев по дате</v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
              v-model="dateFrom"
              label="Дата начала"
              type="date"
              outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
              v-model="dateTo"
              label="Дата окончания"
              type="date"
              outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <my-button @click="applyFilter">Применить фильтр</my-button>
    </v-card-text>
  </v-card>
</template>

<script>
import MyButton from "@/components/UI/MyButton.vue";

export default {
  components: {MyButton},
  data() {
    return {
      dateFrom: null,
      dateTo: null,
    };
  },
  methods: {
    applyFilter() {
      if (this.dateFrom && this.dateTo) {
        if (new Date(this.dateFrom) > new Date(this.dateTo)) {
          alert('Дата начала должна быть меньше или равна дате окончания.');
          return;
        }
        this.$emit('filter', { dateFrom: this.dateFrom, dateTo: this.dateTo });
      } else {
        alert('Пожалуйста, выберите обе даты.');
      }
    },
  },
};
</script>
<style>

</style>