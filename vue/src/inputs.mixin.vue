<script>
export default {
  props: {
    model: {
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
    }
  },
  data() {
    return {
      focused: false,
      id: this.generateID
    }
  },
  computed: {
    innerModel() {
      return this.model
    },
    generateID() {
      if (!this.noLabel) return this.label + Date.now()
      return Math.random().toString(16).slice(2) + Date.now()
    },
    noLabel() {
      return this.label === '' || this.label === undefined
    }
  },
  methods: {
    onChange(e) { this.$emit('update:model', e.target[this.modelType] ) }
  }
}
</script>
