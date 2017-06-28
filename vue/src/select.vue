<template>
  <div class="p-input-group has-select">
    <label v-if="hasLabel" :for="id" class="p-input-label">{{ label }}</label>
    <span class="p-select-wrapper">
      <select :id="id" :disabled="disabled" class="p-select" :value="value" @change="onChange">
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
  methods: {
    stateFromEvent(e) { 
      return e.target.value
    }
  }
}
</script>
