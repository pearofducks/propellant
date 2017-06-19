<template>
  <div class="p-input-group has-checkbox">
    <label :class="{ 'focus': focused, 'disabled': disabled }" class="p-checkbox">
      <input :disabled="disabled" @focus="focused = true" @focusout="focused = false" type="checkbox" v-model="innerModel" @change="onChange">
        {{ label }}
      <span class="p-check-lever"></span>
    </label>
  </div>
</template>

<script>
import inputs from './inputs.mixin'

export default {
  name: 'pCheckbox',
  mixins: [ inputs ],
  props: {
    label: {
      type: String,
      default: '',
      note: "a label to be appended after the checkbox"
    }
  },
  methods: {
    stateFromEvent(e) { return e.target.checked }
  }
}
</script>
