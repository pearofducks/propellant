<template>
  <aside>
    <h1 @click="callHideOnParent" style="cursor: pointer;">You may click this header to close the modal, or click the backdrop</h1>
  </aside>
</template>

<script>
export default {
  methods: {
    callHideOnParent() { this.$parent.hide() }
  }
}
</script>
