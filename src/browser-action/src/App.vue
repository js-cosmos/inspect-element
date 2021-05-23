<template lang="pug">
v-app
  rate-us
  modifier-key-combination
  mode
  color
  sideline
  christmas
</template>

<script>
import { defineComponent } from 'vue'
import RateUs from './views/rate-us/index.vue'
import modifierKeyCombination from './views/modifier-key-combination/index.vue'
import Color from './views/color/index.vue'
import Mode from './views/mode/index.vue'
import Sideline from './views/sideline/index.vue'
import Christmas from './views/christmas/index.vue'

export default defineComponent({
  name: 'App',

  components: {
    RateUs,
    modifierKeyCombination,
    Color,
    Mode,
    Sideline,
    Christmas,
  },
})
</script>

<style>
.v-application {
  min-width: 300px;
  min-height: 500px;
  overflow: auto;
  background: transparent;
  z-index: 0;
}

.v-subheader {
  height: fit-content;
}

.v-list-item {
  min-height: 0;
}

.v-application.theme--light,
.v-application--wrap .theme--light {
  background: transparent !important;
}
</style>
