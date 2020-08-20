<template lang="pug">
  v-list
    v-subheader.my-1.py-1 Colors
    v-list-item.py-1
      color-picker( label="Cover Color" v-model="coverColor" )
    v-list-item.py-1
      color-picker( label="Padding Color" v-model="paddingColor" )
    v-list-item.py-1
      color-picker( label="Border Color" v-model="borderColor" )
    v-list-item.py-1
      color-picker( label="Margin Color" v-model="marginColor" )
</template>

<script>
import ColorPicker from './color-picker'

export default {
  name: 'color',

  components: {
    ColorPicker,
  },

  data: () => ({
    coverColor: '#2E92AF80',
    paddingColor: '#63CE1B81',
    borderColor: '#f9f30dc2',
    marginColor: '#D5671790',
  }),

  watch: {
    coverColor() {
      chrome.storage.sync.set({ coverColor: this.coverColor })
    },
    paddingColor() {
      chrome.storage.sync.set({ paddingColor: this.paddingColor })
    },
    borderColor() {
      chrome.storage.sync.set({ borderColor: this.borderColor })
    },
    marginColor() {
      chrome.storage.sync.set({ marginColor: this.marginColor })
    },
  },

  created() {
    chrome.storage.sync.onChanged.addListener(this.handleStorageChange)

    chrome.storage.sync.get(
      ['coverColor', 'paddingColor', 'borderColor', 'marginColor'],
      ({ coverColor, paddingColor, borderColor, marginColor }) => {
        this.coverColor = coverColor
        this.paddingColor = paddingColor
        this.borderColor = borderColor
        this.marginColor = marginColor
      },
    )
  },

  beforeDestroy() {
    chrome.storage.sync.onChanged.removeListener(this.handleStorageChange)
  },

  methods: {
    handleStorageChange(changes) {
      if (changes.coverColor) this.coverColor = changes.coverColor.newValue
      if (changes.paddingColor) this.paddingColor = changes.paddingColor.newValue
      if (changes.borderColor) this.borderColor = changes.borderColor.newValue
      if (changes.marginColor) this.marginColor = changes.marginColor.newValue
    },
  },
}
</script>
