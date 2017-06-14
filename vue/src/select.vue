<template>
  <div class="input-group has-select">
    <label :for="id" class="input-label" :class="{ 'no-label': noLabel }">{{ label }}</label>
    <span class="select-wrapper" :class="{ 'multiple': multiple }">
      <select :id="id" :disabled="disabled" :multiple="multiple" class="select" v-model="innerModel" @change="onChange">
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
