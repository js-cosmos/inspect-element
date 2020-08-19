<template lang="pug">
  v-menu( offset-y :close-on-content-click="false" )
    template( v-slot:activator="{ on, attrs }" )
      v-btn.mx-2(
        :id="id"
        v-bind="attrs"
        v-on="on"
        small
        icon
        )
        v-icon( :color="color" ) mdi-format-color-fill
      v-label( :for="id" ) {{ label }}
    v-color-picker( :value="color" mode="hexa" @update:color="changeColor" )
</template>

<script>
export default {
  model: {
    event: 'change',
    prop: 'color',
  },

  data: () => ({
    id: Math.random().toString(36).slice(2),
  }),

  props: {
    label: String,
    color: String,
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
