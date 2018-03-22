<script>
export default {
  props: {
    value: {
      required: true,
      note: "a model object the component should bind to"
    },
    disabled: {
      type: Boolean,
      default: false,
      note: "whether the element is disabled or not"
    },
    label: {
      type: String,
      note: "a label to be placed before the form field"
    },
    uid: {
      type: String,
      note: "a unique identifier for the component, used to bind labels to inputs"
    }
  },
  data() {
    return {
      focused: false,
      id: this.generateID()
    }
  },
  computed: {
    innerModel: {
      get() { return this.value },
      set(val) { this.$emit('input', val) }
    },
    hasLabel() {
      return this.label !== undefined
    }
  },
  methods: {
    generateID() {
      if (this.uid) return this.uid
      if (this.label === undefined) return ""
      return "p" + Math.random().toString(16).slice(2) + Date.now()
    },
    onChange(e) { this.$emit('input', this.stateFromEvent(e) ) }
  }
}
</script>
