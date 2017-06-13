<script>
export default {
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