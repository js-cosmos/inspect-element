<template lang="pug">
  v-list
    v-list-item
      v-text-field.mt-1( :value="description" label="Press any key to set modifier key combination." @keydown.prevent="handleKeyDown" hide-details="auto" )
    v-list-item
      v-checkbox( v-model="isPrintTargetElement" label="Log element on click." )
</template>

<script>
import configs, { onChange } from '../../../../configs'
import { MODIFIER_KEYS } from '../../../../util'

export default {
  name: 'modifier-key-combination',

  data() {
    return {
      modifierKeyCombination: configs.modifierKeyCombination,
      isPrintTargetElement: configs.isPrintTargetElement,
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
    isPrintTargetElement() {
      if (this.isPrintTargetElement !== configs.isPrintTargetElement)
        chrome.storage.sync.set({ isPrintTargetElement: this.isPrintTargetElement })
    },
  },

  created() {
    onChange('modifierKeyCombination', newValue => (this.modifierKeyCombination = newValue))
    onChange('isPrintTargetElement', newValue => (this.isPrintTargetElement = newValue))
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
