<template lang="pug">
v-list
  v-subheader Style Info
  v-list-item
    v-checkbox(v-model='showStyleInfo')
    v-label Shown Info
</template>

<script>
import configs, { onChange } from '../../../../configs'

export default {
  name: 'mode',

  data() {
    return {
      showStyleInfo: configs.showStyleInfo,
    }
  },

  watch: {
    showStyleInfo() {
      if (this.showStyleInfo !== configs.showStyleInfo) chrome.storage.sync.set({ showStyleInfo: this.showStyleInfo })
    },
  },

  created() {
    onChange('showStyleInfo', newValue => (this.showStyleInfo = newValue))
  },
}
</script>
