<template>
  <transition name="p-fade-in">
    <aside class="p-popup-backdrop" v-if="visible">
      <div class="p-popup-container">
        <div class="p-popup-titlebar">
          <h3>{{title}}</h3>
          <span @click="hide" v-if="closeButton" class="close">X</span>
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
      bodyClassName: 'p-popup-showing',
      showingSelector: '.p-popup-container'
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
  }
}
</script>
