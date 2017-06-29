<template>
  <div class="p-input-group has-textarea">
    <label :for="id" class="p-input-label">{{ label }}</label>
    <div class="p-input-wrapper">
      <textarea :id="id" :disabled="disabled" class="p-textarea" :placeholder="placeholder" v-model="innerModel" @input="onChange"> </textarea>
    </div>
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
  methods: {
    stateFromEvent(e) { return e.target.value }
  }
}
</script>
