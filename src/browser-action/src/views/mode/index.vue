<template lang="pug">
  v-list
    v-subheader Mode
    v-list-item
      v-radio-group.pl-3.mt-1( v-model="mode" hide-details="auto" )
        v-radio( label="Inspect by content" value="by-content" )
        v-radio( label="Inspect by others" value="by-others" )
</template>

<script>
export default {
  name: 'mode',

  data: () => ({
    mode: 'by-content',
  }),

  watch: {
    mode() {
      console.log(this.mode)
      chrome.storage.sync.set({ mode: this.mode })
    },
  },

  created() {
    chrome.storage.sync.onChanged.addListener(this.handleStorageChange)

    chrome.storage.sync.get(['mode'], ({ mode }) => {
      this.mode = mode
    })
  },

  beforeDestroy() {
    chrome.storage.sync.onChanged.removeListener(this.handleStorageChange)
  },

  methods: {
    handleStorageChange(changes) {
      if (changes.mode) this.mode = changes.mode.newValue
    },
  },
}
</script>
