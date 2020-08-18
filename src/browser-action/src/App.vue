<template lang="pug">
  v-app
    color
</template>

<script>
import Color from './views/color'

export default {
  name: 'App',

  components: {
    Color,
  },
}
</script>

<style>
body {
  width: 300px;
  height: 500px;
  overflow: scroll;
}

.v-subheader {
  height: fit-content;
}

.v-list-item {
  min-height: 0;
}
</style>
