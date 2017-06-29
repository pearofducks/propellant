<template>
  <div class="p-input-group has-select">
    <label v-if="hasLabel" :for="id" class="p-input-label">{{ label }}</label>
    <span class="p-select-wrapper" :class="{ 'multiple': multiple }">
      <select :id="id" :disabled="disabled" :multiple="multiple" class="p-select" v-model="innerModel" @change="onChange">
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
  methods: {
    stateFromEvent(e) { 
      if (!this.multiple) return e.target.value
      let result = []
      let options = e.target.options
      for (let i=0, length=options.length; i<length; i++) {
        if (options[i].selected) result.push(options[i].value)
      }
      return result
    }
  }
}
</script>
