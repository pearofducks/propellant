<template>
  <transition name="p-fade-in">
    <aside class="p-popup-backdrop" v-if="visible">
      <div class="p-popup-container">
        <div class="p-popup-titlebar">
          <h3>{{title}}</h3>
          <span v-if="closeButton" class="close">X</span>
        </div>
        <slot></slot>
      </div>
    </aside>
  </transition>
</template>

<script>
import dialog from './dialog.mixin'

export default {
  name: 'pPopup',
  mixins: [ dialog ],
  data() {
    return {
      visible: false,
      bodyClassName: 'p-popup-showing'
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
