<template lang="pug">
  v-list.mx-auto(v-if="count > 300 && dismissed === false")
    v-subheader How satisfied are you with our product?
    v-list-item
      v-btn.mx-auto(@click="openExtensionPage" rounded small)
        span Rate us on Google
        v-icon.ml-0(x-small right color="orange") mdi-star
    v-list-item
      v-btn.mx-auto.mt-1(@click="dismiss" text rounded small)
        span Dismiss
</template>

<script>
import configs, { onChange } from '../../../../configs'

export default {
  data() {
    return {
      count: configs.count,
      dismissed: configs.dismissed,
    }
  },

  created() {
    onChange('count', newValue => (this.count = newValue))
    onChange('dismissed', newValue => (this.dismissed = newValue))
  },

  methods: {
    openExtensionPage() {
      window.open(
        'https://chrome.google.com/webstore/detail/inspect-element/flgcpmeleoikcibkiaiindbcjeldcogp?hl=zh-TW&authuser=0',
        '_blank',
      )
    },
    dismiss() {
      chrome.storage.sync.set({ dismissed: true })
    },
  },
}
</script>
