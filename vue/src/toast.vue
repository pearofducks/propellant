<template>
  <transition name='p-toast-bottom'>
    <aside v-show="showing" class="p-toast-wrapper">
      <div class="p-toast-container" :class="type">
        <span class="p-toast-message" v-html="msg"></span>
      </div>
    </aside>
  </transition>
</template>

<script>
import {events} from '../events'

const default_opts = {
  msg: "<h3>Salutations, I am a toast.</h3>",
  type: "",
  timeout: 3600
}

export default {
  name: 'pToast',
  props: {
    noEvents: {
      type: Boolean,
      default: false,
      note: "disables the creation of event listeners"
    }
  },
  created() {
    if (this.noEvents) return
    events.$on('toast:push', (opts, force) => {
      if (force) {
        this.clearTimer()
        this.show(opts)
      }
      else {
        this.push(opts)
      }
    })
    events.$on('toast:hide', (clear) => {
      if (clear) this.clearQueue()
      this.hide()
    })
  },
  data() {
    return {
      msg: "",
      type: "",
      showing: false,
      sleeping: false,
      timer: null,
      queue: []
    }
  },
  methods: {
    merge(opts) {
      return Object.assign({}, default_opts, opts)
    },
    push(opts) {
      this.queue.push(this.merge(opts))
      this.checkQueue()
    },
    clearQueue() {
      this.queue = []
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    checkQueue() {
      if (this.showing === false && this.sleeping === false && this.queue.length > 0) {
        this.show(this.queue.shift())
      }
    },
    show(t) {
      this.msg = t.msg
      this.type = t.type
      // timeout of 0 means never auto-hide
      if (t.timeout !== 0) {
        this.timer = setTimeout(
          () => { this.hide() },
          t.timeout)
      }
      this.showing = true
    },
    hide() {
      this.clearTimer()
      this.showing = false
      this.sleeping = true
      setTimeout(() => {
        this.sleeping = false
        this.checkQueue()
      }, 500)
    }
  }
}
</script>
