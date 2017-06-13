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
    <section class="labelled" data-type="inputs">
<!--       <div class="input-group">
        <label class="input-label">label for text input
          <input class="input" type="text" placeholder="text input" />
          <span class="input-hint success">things are going well</span>
        </label>
      </div>
      <div class="input-group">
        <label class="input-label">label for disabled text input
          <input disabled class="input" type="text" placeholder="disabled text input" />
        </label>
      </div>
 -->      <div class="input-group">
        <label class="input-label">label for textarea
          <textarea class="textarea" placeholder="textarea"> </textarea>
        </label>
      </div>
      <div class="input-group">
        <label class="input-label">label for disabled textarea
          <textarea disabled class="textarea" placeholder="textarea"> </textarea>
        </label>
      </div>
    </section>
<!--     <section class="labelled" data-type="selects">
      <div class="input-group">
        <span class="select-wrapper">
          <select class="select">
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
          </select>
        </span>
      </div>
      <div class="input-group">
        <span class="select-wrapper">
          <select disabled class="select">
            <option>First</option>
            <option>Second</option>
            <option>Third</option>
            <option>Fourth</option>
          </select>
        </span>
      </div>
    </section>
 --><!--     <section class="labelled" data-type="toggles">
      <div class="input-group">
        <label tabindex=0 class="checkbox">
          <input type="checkbox" />
          checkbox
          <span class="lever"></span>
        </label>
      </div>
      <div class="input-group">
        <label tabindex=0 class="checkbox disabled">
          <input disabled type="checkbox" />
          disabled checkbox
          <span class="lever"></span>
        </label>
      </div>
      <div class="input-group">
        <label tabindex=0 class="checkbox disabled">
          <input disabled checked type="checkbox" />
          disabled checked-box
          <span class="lever"></span>
        </label>
      </div>
      <div class="input-group">
        <label tabindex=0 class="switch">
          <input type="checkbox" />
          Left
          <span class="lever"></span>
          Right
        </label>
      </div>
      <div class="input-group">
        <label tabindex=0 class="switch disabled">
          <input disabled type="checkbox" />
          Left
          <span class="lever"></span>
          Right
        </label>
      </div>
    </section>
 -->    </main>
  </div>
</template>

<script>
import colorPalette from './ColorPalette.vue'

export default {
  name: 'styleguide',
  components: { colorPalette }
}
</script>
