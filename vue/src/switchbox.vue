<template>
  <div class="input-group has-switchbox">
    <label :class="{ 'focus': focused, 'disabled': disabled }" class="switch">
      <input :disabled="disabled" @focus="focused = true" @focusout="focused = false" type="checkbox" v-model="innerModel" @change="onChange">
        {{ leftLabel }}
      <span class="lever"></span>
        {{ rightLabel }}
    </label>
  </div>
</template>

<script>
import inputs from './inputs.mixin'

export default {
  name: 'pSwitchbox',
  mixins: [ inputs ],
  props: {
    labels: {
      type: Array,
      default: () => [],
      note: "an array of labels in the form: [left-label, right-label]"
    }
  },
  data() {
    return { modelType: 'checked' }
  },
  computed: { 
    leftLabel() { return this.labels[0] ? this.labels[0] : "" },
    rightLabel() { return this.labels[1] ? this.labels[1] : "" }
  }
}
</script>
