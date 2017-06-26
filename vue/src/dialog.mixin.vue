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
    },
    hide() {
      this.visible = false
      document.body.classList.remove(this.bodyClassName)
    }
  }
}
</script>