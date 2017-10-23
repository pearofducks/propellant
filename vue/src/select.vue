<template>
  <div class="input-group">
    <span class="select-wrapper">
      <select :disabled="disabled" :multiple="multiple" class="select" v-model="innerModel" @change="onChange">
        <slot></slot>
      </select>
    </span>
  </div>
</template>

<script>
import inputs from './inputs.mixin.vue'

export default {
  name: 'pSelect',
  mixins: [ inputs ],
  props: {
    multiple: {
      type: Boolean,
      default: false,
      note: "controls if the element should be a multi-select or not"
    }
  },
  data() {
    return { modelType: 'value' }
  }
}
</script>
