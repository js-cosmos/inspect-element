<template lang="pug">
  v-menu( offset-y :close-on-content-click="false" )
    template( v-slot:activator="{ on, attrs }" )
      v-btn.d-flex.justify-start(
        small
        style="width: 100%;"
        :label="label"
        v-bind="attrs"
        v-on="on"
        text
        )
        v-icon( :color="paddingColor" ) mdi-format-color-fill
        span.ml-2 {{ label }}
    v-color-picker( :value="paddingColor" mode="hexa" @update:color="changeColor" )
</template>

<script>
export default {
  model: {
    event: 'change',
    prop: 'paddingColor',
  },

  props: {
    label: String,
    paddingColor: String,
  },

  methods: {
    changeColor(color) {
      this.$emit('change', color.hexa)
    },
  },
}
</script>

<style>
.v-color-picker {
  margin: 0 !important;
}
</style>
