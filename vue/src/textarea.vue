<template>
  <div class="input-group">
    <label :for="id" class="input-label">{{ label }}</label>
    <textarea :id="id" :disabled="disabled" class="textarea" :placeholder="placeholder"v-model="innerModel" @change="onChange"> </textarea>
  </div>
</template>

<script>
import inputs from './inputs.mixin'
export default {
  name: 'pTextarea',
  mixins: [ inputs ],
  props: {
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
