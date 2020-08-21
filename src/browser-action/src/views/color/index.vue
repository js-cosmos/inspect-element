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
    coverColor: '#62C0CC80',
    paddingColor: '#62D56E80',
    borderColor: '#DDE64880',
    marginColor: '#FC923580',
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
        if (coverColor) this.coverColor = coverColor
        if (paddingColor) this.paddingColor = paddingColor
        if (borderColor) this.borderColor = borderColor
        if (marginColor) this.marginColor = marginColor
      },
    )
  },

  beforeDestroy() {
    chrome.storage.sync.onChanged.removeListener(this.handleStorageChange)
  },

  methods: {
    handleStorageChange(changes) {
      if (changes.coverColor && changes.coverColor.newValue) this.coverColor = changes.coverColor.newValue
      if (changes.paddingColor && changes.paddingColor.newValue) this.paddingColor = changes.paddingColor.newValue
      if (changes.borderColor && changes.borderColor.newValue) this.borderColor = changes.borderColor.newValue
      if (changes.marginColor && changes.marginColor.newValue) this.marginColor = changes.marginColor.newValue
    },
  },
}
</script>
