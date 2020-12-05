<template lang="pug">
  v-list.ml-1
    v-subheader Sideline
    v-list-item.my-2
      v-checkbox.ml-2.mt-0.pt-0( v-model="isCoverSidelineEnabled" )
      color-picker( v-model="coverSidelineColor" )
      v-label Cover
    v-list-item.mb-2
      v-checkbox.ml-2.mt-0.pt-0( v-model="isPaddingSidelineEnabled" )
      color-picker( v-model="paddingSidelineColor" )
      v-label Padding
    v-list-item.mb-2
      v-checkbox.ml-2.mt-0.pt-0( v-model="isBorderSidelineEnabled" )
      color-picker( v-model="borderSidelineColor" )
      v-label Border
    v-list-item
      v-checkbox.ml-2.mt-0.pt-0( v-model="isMarginSidelineEnabled" )
      color-picker( v-model="marginSidelineColor" )
      v-label Margin
</template>

<script>
import ColorPicker from '../../components/color-picker'
import configs, { onChange } from '../../../../configs'

export default {
  name: 'enable-disable-sideline',

  components: {
    ColorPicker,
  },

  data() {
    return {
      isCoverSidelineEnabled: configs.isCoverSidelineEnabled,
      isPaddingSidelineEnabled: configs.isPaddingSidelineEnabled,
      isBorderSidelineEnabled: configs.isBorderSidelineEnabled,
      isMarginSidelineEnabled: configs.isMarginSidelineEnabled,
      coverSidelineColor: configs.coverSidelineColor,
      paddingSidelineColor: configs.paddingSidelineColor,
      borderSidelineColor: configs.borderSidelineColor,
      marginSidelineColor: configs.marginSidelineColor,
    }
  },

  watch: {
    isCoverSidelineEnabled() {
      if (this.isCoverSidelineEnabled !== configs.isCoverSidelineEnabled)
        chrome.storage.sync.set({ isCoverSidelineEnabled: this.isCoverSidelineEnabled })
    },
    isPaddingSidelineEnabled() {
      if (this.isPaddingSidelineEnabled !== configs.isPaddingSidelineEnabled)
        chrome.storage.sync.set({ isPaddingSidelineEnabled: this.isPaddingSidelineEnabled })
    },
    isBorderSidelineEnabled() {
      if (this.isBorderSidelineEnabled !== configs.isBorderSidelineEnabled)
        chrome.storage.sync.set({ isBorderSidelineEnabled: this.isBorderSidelineEnabled })
    },
    isMarginSidelineEnabled() {
      if (this.isMarginSidelineEnabled !== configs.isMarginSidelineEnabled)
        chrome.storage.sync.set({ isMarginSidelineEnabled: this.isMarginSidelineEnabled })
    },
    coverSidelineColor() {
      if (this.coverSidelineColor !== configs.coverSidelineColor)
        chrome.storage.sync.set({ coverSidelineColor: this.coverSidelineColor })
    },
    paddingSidelineColor() {
      if (this.paddingSidelineColor !== configs.paddingSidelineColor)
        chrome.storage.sync.set({ paddingSidelineColor: this.paddingSidelineColor })
    },
    borderSidelineColor() {
      if (this.borderSidelineColor !== configs.borderSidelineColor)
        chrome.storage.sync.set({ borderSidelineColor: this.borderSidelineColor })
    },
    marginSidelineColor() {
      if (this.marginSidelineColor !== configs.marginSidelineColor)
        chrome.storage.sync.set({ marginSidelineColor: this.marginSidelineColor })
    },
  },

  created() {
    onChange('isCoverSidelineEnabled', newValue => (this.isCoverSidelineEnabled = newValue))
    onChange('isPaddingSidelineEnabled', newValue => (this.isPaddingSidelineEnabled = newValue))
    onChange('isBorderSidelineEnabled', newValue => (this.isBorderSidelineEnabled = newValue))
    onChange('isMarginSidelineEnabled', newValue => (this.isMarginSidelineEnabled = newValue))
    onChange('coverSidelineColor', newValue => (this.coverSidelineColor = newValue))
    onChange('paddingSidelineColor', newValue => (this.paddingSidelineColor = newValue))
    onChange('borderSidelineColor', newValue => (this.borderSidelineColor = newValue))
    onChange('marginSidelineColor', newValue => (this.marginSidelineColor = newValue))
  },
}
</script>

<style scoped>
/deep/.v-input__control {
  height: 28px;
}

.v-label {
  margin-left: 8px !important;
  top: -0.5px;
}
</style>
