<template>
  <v-btn class ="my-btn" variant="outlined">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'my-button',
}
</script>

<style>
.my-btn{
  margin: 0.5em;
}
</style>