<template>
  <div>
    <section class="palette labelled" data-type="colors">
      <color v-for="(color, index) in palettes" v-once :color="color" :key="index"></color>
    </section>
  </div>
</template>

<script>
import color from './Color.vue'

function hexify(rgb) {
  return '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => parseInt(color).toString(16)).join('');
}
function getRootStyle(name) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

export default {
  name: 'color-palette',
  components: { color },
  data() {
    return {
      palettes: ['primary', 'gray', 'background', 'success', 'warning', 'danger', 'light']
    }
  },
  created() {
    const shades = ['base', 'light', 'dark']
    this.palettes = this.palettes.map((name) => {
      let color = {}
      color.name = name
      shades.forEach(shade => 
        color[shade] = getRootStyle(`--${name}_${shade}`))
      return color
    })
  },
}
</script>
