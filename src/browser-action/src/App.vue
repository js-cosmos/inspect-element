<template lang="pug">
  v-app
    mode
    color
</template>

<script>
import Color from './views/color'
import Mode from './views/mode'

export default {
  name: 'App',

  components: {
    Color,
    Mode,
  },
}
</script>

<style>
.v-application {
  min-width: 300px;
  min-height: 500px;
  overflow: auto;
}

.v-subheader {
  height: fit-content;
}

.v-list-item {
  min-height: 0;
}
</style>
