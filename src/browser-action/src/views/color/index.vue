<template lang="pug">
  v-list
    v-subheader.my-1.py-1 Colors
    v-list-item.py-1
      color-picker( label="Cover Color" v-model="coverColor" )
    v-list-item.py-1
      color-picker( label="Margin Color" v-model="marginColor" )
    v-list-item.py-1
      color-picker( label="Padding Color" v-model="paddingColor" )
</template>

<script>
import ColorPicker from './color-picker'
import { STORAGE_KEYS } from '../../configs/index'

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
      chrome.storage.sync.set({ [STORAGE_KEYS.paddingColor]: this.paddingColor })
    },
    marginColor() {
      chrome.storage.sync.set({ [STORAGE_KEYS.marginColor]: this.marginColor })
    },
    coverColor() {
      chrome.storage.sync.set({ [STORAGE_KEYS.coverColor]: this.coverColor })
    },
  },

  created() {
    chrome.storage.sync.onChanged.addListener(this.handleStorageChange)

    chrome.storage.sync.get(
      [STORAGE_KEYS.paddingColor, STORAGE_KEYS.marginColor, STORAGE_KEYS.coverColor],
      ({ paddingColor, marginColor, coverColor }) => {
        this.paddingColor = paddingColor
        this.marginColor = marginColor
        this.coverColor = coverColor
      },
    )
  },

  beforeDestroy() {
    chrome.storage.sync.onChanged.removeListener(this.handleStorageChange)
  },

  methods: {
    handleStorageChange(changes) {
      if (changes[STORAGE_KEYS.paddingColor]) this.paddingColor = changes[STORAGE_KEYS.paddingColor].newValue
      if (changes[STORAGE_KEYS.marginColor]) this.marginColor = changes[STORAGE_KEYS.marginColor].newValue
      if (changes[STORAGE_KEYS.coverColor]) this.coverColor = changes[STORAGE_KEYS.coverColor].newValue
    },
  },
}
</script>
