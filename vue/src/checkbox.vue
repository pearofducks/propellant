<template>
  <div class="p-input-group has-checkbox">
    <label :class="{ 'focus': focused, 'disabled': disabled }" class="p-checkbox">
      <input :disabled="disabled" @focus="focused = true" @focusout="focused = false" type="checkbox" :checked="value" @change="onChange">
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
    },
    indeterminate: {
      type: Boolean,
      default: false,
      note: "whether the checkbox should initially be indeterminate"
    }
  },
  mounted() {
    if (this.indeterminate) this.$el.querySelector('input').indeterminate = true
  },
  methods: {
    stateFromEvent(e) { return e.target.checked }
  }
}
</script>
