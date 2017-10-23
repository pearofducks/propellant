<template>
  <transition name="fade-in">
    <aside class="popup-backdrop" v-if="visible">
      <div class="popup-container">
        <div class="popup-titlebar">
          <h3>{{title}}</h3>
          <span v-if="closeButton" class="close">X</span>
        </div>
        <slot></slot>
      </div>
    </aside>
  </transition>
</template>

<script>
import dialog from './dialog.mixin.vue'

export default {
  name: 'pPopup',
  mixins: [ dialog ],
  data() {
    return {
      visible: false,
      bodyClassName: 'popup-showing'
    }
  },
  props: {
    title: {
      type: String,
      default: undefined
    },
    closeButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    show() { this.visible = true },
    hide() { this.visible = false }
  }
}
</script>
