<template lang="pug">
  v-list
    v-subheader.my-1.py-1 Colors
    v-list-item.py-1
      color-picker( label="Cover Color" v-model="coverColor" mode="rgba" )
    v-list-item.py-1
      color-picker( label="Margin Color" v-model="marginColor" mode="rgba" )
    v-list-item.py-1
      color-picker( label="Padding Color" v-model="paddingColor" mode="rgba" )
</template>

<script>
import ColorPicker from './color-picker'

export default {
  name: 'color',

  components: {
    ColorPicker,
  },

  data: () => ({
    paddingColor: '#63CE1B81',
    marginColor: '#D5671790',
    coverColor: '#2E92AF80',
  }),

  watch: {
    paddingColor() {
      chrome.storage.sync.set({ paddingColor: this.paddingColor })
    },
    marginColor() {
      chrome.storage.sync.set({ marginColor: this.marginColor })
    },
    coverColor() {
      chrome.storage.sync.set({ coverColor: this.coverColor })
    },
  },

  created() {
    chrome.storage.sync.get(
      ['paddingColor', 'marginColor', 'coverColor'],
      ({ paddingColor, marginColor, coverColor }) => {
        this.paddingColor = paddingColor
        this.marginColor = marginColor
        this.coverColor = coverColor
      },
    )
  },
}
</script>
