<script>
export default {
  props: {
    emitEvents: {
      type: Boolean,
      default: false,
      note: "whether or not the component should emit events when shown/hidden"
    }
  },
  data() {
    return { visible: false }
  },
  methods: {
    show() {
      this.visible = true
      document.body.classList.add(this.bodyClassName)
      if (emitEvents) this.shown()
    },
    hide() {
      this.visible = false
      document.body.classList.remove(this.bodyClassName)
      if (emitEvents) this.hidden()
    },
    shown() {
      if (!this.$el.querySelector(this.showingSelector)) {
        window.requestAnimationFrame(this.shown)
      } else {
        this.$emit('shown')
      }
    },
    hidden() {
      if (this.$el.querySelector(this.showingSelector)) {
        window.requestAnimationFrame(this.hidden)
      } else {
        this.$emit('hidden')
      }
    }
  }
}
</script>