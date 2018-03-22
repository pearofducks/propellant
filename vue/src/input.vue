<template>
  <div class="p-input-group has-input" :class="validationClass">
    <label v-if="hasLabel" :for="id" class="p-input-label">{{ label }}</label>
    <div class="p-input-wrapper" :class="{ 'has-validation-icon': validationIcon !== '', 'has-hint': validationMsg }">
      <input :id="id" :disabled="disabled" class="p-input" v-model="innerModel" @input="validateAndChange" type="text" :placeholder="placeholder" />
      <div class="p-input-validation-icon">
        <svg v-if="validationIcon === 'alert'" class="p-input-icon" xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12" y2="16"/>
        </svg>
        <svg v-if="validationIcon === 'success'" class="p-input-icon" xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.07V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="23 3 12 14 9 11"/>
        </svg>
        <svg v-if="validationIcon === 'error'" class="p-input-icon" xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="15" y1="9" x2="9" y2="15"/>
          <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
      </div>
    </div>
    <span class="p-input-hint">{{ validationMsg }}</span>
  </div>
</template>

<script>
import inputs from './inputs.mixin.vue'

const default_opts = {
  msg: '',
  icon: '',
  class: '',
}

export default {
  name: 'pInput',
  mixins: [ inputs ],
  props: {
    placeholder: {
      type: String,
      default: '',
      note: "a placeholder for the input field"
    },
    validator: {
      type: Function
    }
  },
  data() {
    return {
      validationIcon: '',
      validationMsg: '',
      validationClass: ''
    }
  },
  methods: {
    stateFromEvent(e) { return e.target.value },
    validateAndChange(e) {
      let value = e.target.value
      if (this.validator) {
        let result = Object.assign({}, default_opts, this.validator(value))
        this.validationIcon = result.icon
        this.validationMsg = result.msg
        this.validationClass = result.class
      }
      this.onChange(e)
    }
  }
}
</script>
