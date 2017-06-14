<template>
  <div id="styleguide">
    <color-palette></color-palette>
    <main>
    <section class="labelled" data-type="type">
      <h1 class="header">Header level 1</h1>
      <h2 class="header">Header level 2</h2>
      <h3 class="header">Header level 3</h3>
      <h4 class="header">Header level 4</h4>
      <h5 class="header">Header level 5</h5>
      <p>A paragraph with some <i>italics</i> and <b>bold</b> text.</p>
    </section>
    <section class="labelled" data-type="buttons">
      <div class="input-group">
        <a class="button">a.button</a>
        <button class="button">normal</button>
        <button disabled class="button">normal disabled</button>
      </div>
      <div class="input-group">
        <button class="button button-primary">filled</button>
        <button disabled class="button button-primary">filled disabled</button>
      </div>
      <div class="input-group">
        <button class="button button-link">link style</button>
        <button disabled class="button button-link">link style disabled</button>
      </div>
      <div class="input-group">
        <button class="button button-primary loading">loading</button>
        <button class="button loading">loading</button>
      </div>
    </section>
    </main>
  </div>
</template>

<script>
import colorPalette from './ColorPalette.vue'

export default {
  name: 'styleguide',
  components: { colorPalette }
}
</script>
