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
    return {
      visible: false,
      didEmit: false
    }
  },
  methods: {
    show() {
      this.visible = true
      document.body.classList.add(this.bodyClassName)
      if (this.emitEvents) {
        this.didEmit = false
        this.shown()
      }
    },
    hide() {
      this.visible = false
      document.body.classList.remove(this.bodyClassName)
      if (this.emitEvents) {
        this.didEmit = false
        this.hidden()
      }
    },
    shown() {
      if (!this.$el.querySelector) {
        window.requestAnimationFrame(this.shown)
      } 
      else if (!this.didEmit) {
        this.didEmit = true
        this.$emit('shown')
      }
    },
    hidden() {
      if (this.$el.querySelector) {
        window.requestAnimationFrame(this.hidden)
      } 
      else if (!this.didEmit) {
        this.didEmit = true
        this.$emit('hidden')
      }
    }
  }
}
</script>