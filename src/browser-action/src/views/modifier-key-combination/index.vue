<template lang="pug">
  v-list
    v-list-item
      v-text-field.mt-1( :value="description" label="Press any key to set modifier key combination." @keydown.prevent="handleKeyDown" hide-details="auto" )
    v-list-item
      v-checkbox( v-model="shouldPrintTargetElement" label="Log element on click." )
    v-list-item
      v-checkbox( v-model="showRenderedElementInfo" label="Show element size info." )
</template>

<script>
import configs, { onChange } from '../../../../configs'
import { MODIFIER_KEYS } from '../../../../util'

export default {
  name: 'modifier-key-combination',

  data() {
    return {
      modifierKeyCombination: configs.modifierKeyCombination,
      shouldPrintTargetElement: configs.shouldPrintTargetElement,
      showRenderedElementInfo: configs.showRenderedElementInfo,
    }
  },

  computed: {
    description() {
      return this.modifierKeyCombination.join(' + ')
    },
  },

  watch: {
    modifierKeyCombination() {
      if (this.modifierKeyCombination !== configs.modifierKeyCombination)
        chrome.storage.sync.set({ modifierKeyCombination: this.modifierKeyCombination })
    },
    shouldPrintTargetElement() {
      if (this.shouldPrintTargetElement !== configs.shouldPrintTargetElement)
        chrome.storage.sync.set({ shouldPrintTargetElement: this.shouldPrintTargetElement })
    },
    showRenderedElementInfo() {
      if (this.showRenderedElementInfo !== configs.showRenderedElementInfo)
        chrome.storage.sync.set({ showRenderedElementInfo: this.showRenderedElementInfo })
    },
  },

  created() {
    onChange('modifierKeyCombination', newValue => (this.modifierKeyCombination = newValue))
    onChange('shouldPrintTargetElement', newValue => (this.shouldPrintTargetElement = newValue))
    onChange('showRenderedElementInfo', newValue => (this.showRenderedElementInfo = newValue))
  },

  methods: {
    handleKeyDown(event) {
      const modifierKeyCombination = MODIFIER_KEYS.filter(key => event[key])
      if (modifierKeyCombination.length === 0) return
      this.modifierKeyCombination = modifierKeyCombination
      chrome.storage.sync.set({ modifierKeyCombination })
    },
    noop: () => {},
  },
}
</script>

<style scoped>
/deep/.v-input__control {
  height: 28px;
}
</style>
