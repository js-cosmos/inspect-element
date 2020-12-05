<template lang="pug">
  v-menu( offset-y :close-on-content-click="false" )
    v-color-picker( :value="color" mode="hexa" @update:color="changeColor" )
    template( v-slot:activator="{ on, attrs }" )
      v-btn(
        :id="id"
        v-bind="attrs"
        v-on="on"
        small
        icon
        )
        v-icon( :color="color" ) mdi-format-color-fill
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

.theme--light.v-btn {
  top: 1px;
}
</style>
