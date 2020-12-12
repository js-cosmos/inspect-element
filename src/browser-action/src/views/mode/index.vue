<template lang="pug">
  v-list
    v-subheader Mode
    v-list-item
      v-radio-group.ml-2.mt-1( v-model="mode" hide-details="auto" )
        v-radio( label="Content" value="content" )
        v-radio( label="Margin" value="margin" )
</template>

<script>
import configs, { onChange } from '../../../../configs'

export default {
  name: 'mode',

  data() {
    return {
      mode: configs.mode,
    }
  },

  watch: {
    mode() {
      if (this.mode !== configs.mode) chrome.storage.sync.set({ mode: this.mode })
    },
  },

  created() {
    onChange('mode', newValue => (this.mode = newValue))
  },
}
</script>
