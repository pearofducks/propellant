<template>
  <article class="p-collapse">
    <div class="p-collapse-title" @click="!hasPromptSlots && toggle()" :class="{ expanded: isExpanded, clickable: !hasPromptSlots }">
      <slot name="title"></slot>
    </div>
    <div class="p-collapse-showmore p-clickable" v-if="hasPromptSlots" @click="toggle()">
      <slot v-if="isExpanded" name="showless"></slot>
      <slot v-else name="showmore"></slot>
    </div>
    <transition @before-enter="beforeEnter" @enter="enter" @leave="leave" :css="false">
      <div class="p-collapse-content" v-if="isExpanded">
        <slot name="content"></slot>
      </div>
    </transition>
  </article>
</template>

<script>
import {events} from '../events'

function easeInOutQuart( t ) {
  const t1 = t - 1;
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
}

export default {
  name: 'pCollapse',
  props: {
    expanded: {
      type: Boolean,
      default: false,
      note: "can be used to set the initial expansion state"
    },
    ns: {
      type: String,
      default: undefined,
      note: "when set, all collapse that share the same namespace will function as an accordion"
    },
    name: {
      type: String,
      required: true,
      note: "a unique name for the collapse"
    }
  },
  created() {
    if (this.ns) {
      events.$on('collapse:accordion', (ns, name) => {
        if (this.ns === ns && this.name !== name) {
          this.hide()
        }
      })
    }
  },
  data() {
    return { isExpanded: this.expanded }
  },
  computed: {
    hasPromptSlots() { return this.$slots.showmore }
  },
  methods: {
    show() { this.isExpanded = true },
    hide() { this.isExpanded = false },
    toggle() {
      this.isExpanded = !this.isExpanded
      if (this.ns && this.isExpanded) {
        events.$emit('collapse:accordion', this.ns, this.name)
      }
    },
    beforeEnter (el) {
      el.style.height = 0
    },
    enter(el, done) {
      el.style.height = "100%"
      let dest = el.getBoundingClientRect().height
      el.style.height = "0px"
      let targetTime = 400
      let start = null
      function step (timestamp) {
        if (!start) start = timestamp
        let progress = timestamp - start
        let percentage = progress / targetTime
        el.style.height = (easeInOutQuart(percentage) * dest) + 'px'
        if (progress < targetTime) { window.requestAnimationFrame(step) }
        else { done() }
      }
      window.requestAnimationFrame(step);
      this.$emit("collapse:shown")
    },
    leave(el, done) {
      let original = el.getBoundingClientRect().height
      let targetTime = 400
      let start = null
      function step (timestamp) {
        if (!start) start = timestamp
        let progress = timestamp - start
        let percentage = progress / targetTime
        el.style.height = (original - (easeInOutQuart(percentage) * original)) + 'px'
        if (progress < targetTime) { window.requestAnimationFrame(step) }
        else { done() }
      }
      window.requestAnimationFrame(step);
      this.$emit("collapse:hidden")
    }
  }
}
</script>
