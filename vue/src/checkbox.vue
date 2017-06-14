<template>
  <div class="input-group has-checkbox">
    <label :class="{ 'focus': focused, 'disabled': disabled }" class="checkbox">
      <input :disabled="disabled" @focus="focused = true" @focusout="focused = false" type="checkbox" v-model="innerModel" @change="onChange">
        {{ label }}
      <span class="lever"></span>
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
  data() {
    return { modelType: 'checked' }
  }
}
</script>
