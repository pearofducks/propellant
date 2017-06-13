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
    }
  },
  data() {
    return {
      focused: false
    }
  },
  computed: {
    innerModel() {
      return this.model
    }
  },
  methods: {
    onChange(e) { this.$emit('update:model', e.target[this.modelType] ) }
  }
}
</script>