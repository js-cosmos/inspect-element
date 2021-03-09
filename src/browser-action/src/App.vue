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
import RateUs from './views/rate-us'
import modifierKeyCombination from './views/modifier-key-combination'
import Color from './views/color'
import Mode from './views/mode'
import Sideline from './views/sideline'
import Christmas from './views/christmas'

export default {
  name: 'App',

  components: {
    RateUs,
    modifierKeyCombination,
    Color,
    Mode,
    Sideline,
    Christmas,
  },
}
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
