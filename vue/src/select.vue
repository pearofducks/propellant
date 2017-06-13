<template>
  <div class="input-group">
    <span class="select-wrapper">
      <select :disabled="disabled" class="select" v-model="innerModel" @change="onChange">
        <slot></slot>
      </select>
    </span>
  </div>
</template>

<script>
import inputs from './inputs.mixin'

export default {
  name: 'pSelect',
  mixins: [ inputs ],
  props: {
  },
  data() {
    return { modelType: 'value' }
  }
}
</script>
