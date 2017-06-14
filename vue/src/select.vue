<template>
  <div class="input-group">
    <label class="input-label">{{ label }}
    <span class="select-wrapper" :class="{ 'multiple': multiple }">
      <select :disabled="disabled" :multiple="multiple" class="select" v-model="innerModel" @change="onChange">
        <slot></slot>
      </select>
    </span>
    </label>
  </div>
</template>

<script>
import inputs from './inputs.mixin'

export default {
  name: 'pSelect',
  mixins: [ inputs ],
  props: {
    label: {
      type: String,
      note: "an input-style label to be prepended to the select, alternatively specify an option with disabled and value=''"
    },
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
