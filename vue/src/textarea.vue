<template>
  <div class="input-group">
    <label class="input-label">{{ label }}
      <textarea :disabled="disabled" class="textarea" :placeholder="placeholder"v-model="innerModel" @change="onChange"> </textarea>
    </label>
  </div>
</template>

<script>
import inputs from './inputs.mixin'
export default {
  name: 'pTextarea',
  mixins: [ inputs ],
  props: {
    label: {
      type: String,
      default: '',
      note: "a label to be placed before the textarea field"
    },
    placeholder: {
      type: String,
      default: '',
      note: "a placeholder for the textarea field"
    }
  },
  data() {
    return {
      modelType: 'value'
    }
  }
}
</script>
