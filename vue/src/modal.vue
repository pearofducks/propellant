<template>
  <transition name='from-bottom'>
    <aside ref="backdrop" class="modal-backdrop" v-if="visible" @click="eventHide($event)">
      <div class="modal-container">
        <slot></slot>
      </div>
    </aside>
  </transition>
</template>

<script>
import { events } from '../events'
import dialog from './dialog.mixin'

export default {
  name: 'pModal',
  mixins: [ dialog ],
  props: {
    name: {
      type: String,
      default: undefined,
      note: "only modal components with a name set will listen for events"
    },
  },
  created() {
    if (this.name) {
      events.$on('modal:show', (name) => {
        if (this.name === name) this.show()
      })
      events.$on('modal:hide', (name) => {
        if (this.name === name) this.hide()
      })
    }
  },
  data() {
    return { bodyClassName: 'modal-showing' }
  },
  methods: {
    eventHide(e) {
      if (e.currentTarget === this.$refs.backdrop && e.target !== e.currentTarget) return
      this.hide()
    }
  },
}
</script>
