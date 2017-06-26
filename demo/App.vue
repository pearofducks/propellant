<template>
  <div id="app">
    <p-toast/>
    <p-modal @shown="shown" @hidden="hidden" ref="demo" emit-events>
      <modal-content></modal-content>
      <h1>I'm a modal!</h1>
    </p-modal>
    <p-modal name="remote">
      <h1>I'm a remote modal!</h1>
      <button @click="showdialog" class="button">show a dialog</button>
    </p-modal>
    <DemoHeader v-once/>
    <main>
      <color-palette></color-palette>
      <section class="labelled" data-type="type">
        <h1 class="header">Header level 1</h1>
        <h2 class="header">Header level 2</h2>
        <h3 class="header">Header level 3</h3>
        <h4 class="header">Header level 4</h4>
        <h5 class="header">Header level 5</h5>
        <p>A paragraph with some <i>italics</i> and <b>bold</b> text.</p>
      </section>
      <section class="labelled" data-type="buttons">
        <div class="p-input-group">
          <a class="p-button">a.button</a>
          <button class="p-button">normal</button>
          <button disabled class="p-button">normal disabled</button>
        </div>
        <div class="p-input-group">
          <button class="p-button is-primary">filled</button>
          <button disabled class="p-button is-primary">filled disabled</button>
        </div>
        <div class="p-input-group">
          <button class="p-button is-link">link style</button>
          <button disabled class="p-button is-link">link style disabled</button>
        </div>
        <div class="p-input-group">
          <button class="p-button is-primary is-loading">loading</button>
          <button class="p-button is-loading">loading</button>
        </div>
      </section>
      <section class="labelled" data-type="inputs">
        <p-textarea :model.sync="inputModel" placeholder="a textarea" label="label for textarea" />
        <p-textarea disabled :model.sync="inputModel" placeholder="a textarea" label="label for disabled textarea" />
        <p-input :model.sync="inputModel" :validator="inputIsLong" placeholder="an input" label="label for an input"/>
        <p-input disabled :model.sync="inputModel" :validator="inputIsLong" placeholder="an input" label="label for an input"/>
        <pre><code>model (sync'd on-change, not on-keyup) = {{ JSON.stringify(inputModel)}}</code></pre>
      </section>
      <section class="labelled" data-type="selects">
        <p-select :model.sync="selectModel">
          <option disabled value="">Please select one</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </p-select>
        <p-select disabled :model.sync="selectModel">
          <option disabled value="">Please select one</option>
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </p-select>
        <pre><code>model = {{ JSON.stringify(selectModel)}}</code></pre>
        <p-select multiple label="Please select multiple" :model.sync="multiselectModel">
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
        </p-select>
        <pre><code>model = {{ JSON.stringify(multiselectModel)}}</code></pre>
      </section>
      <section class="labelled" data-type="toggles">
        <p-switchbox :model.sync="toggleModel" :labels="['bar', 'foo']"/>
        <p-switchbox disabled :model.sync="toggleModel" :labels="['bar', 'foo']"/>
        <p-checkbox :model.sync="toggleModel" label="foo"/>
        <p-checkbox :model.sync="toggleModel" indeterminate label="foo - indeterminate"/>
        <p-checkbox disabled :model.sync="toggleModel" label="foo"/>
        <pre><code>model = {{ JSON.stringify(toggleModel)}}</code></pre>
      </section>
      <section class="labelled" data-type="toast">
        <button class="p-button" @click="showtoast">open a toast</button>
        <button class="p-button" @click="forcetoast">force a toast - no timer</button>
        <button class="p-button" @click="forcetoast2">force a second toast - no timer</button>
        <button class="p-button" @click="forcetoast3">force a third toast - with timer</button>
        <button class="p-button" @click="closetoast">close a single toast</button>
        <button class="p-button" @click="cleartoast">clear all toasts</button>
      </section>
      <section class="labelled" data-type="modal">
        <button class="p-button" @click="showModal('demo')">open a modal</button>
        <button class="p-button" @click="showRemote">open a remote modal</button>
      </section>
      <section style="padding-top: 1.2rem; padding-bottom: 1.2rem;" class="labelled" data-type="collapse">
        <p-collapse name="demo-first">
          <h2 slot="title">I expand when clicked!</h2>
          <div slot="content">
            <h4>Oh, hi there</h4>
            <p>Here's some more content</p>
          </div>
        </p-collapse>
        <p-collapse name="demo-second">
          <h2 slot="title">I do not!</h2>
          <h5 slot="showmore">show more</h5>
          <h5 slot="showless">show less</h5>
          <div slot="content">
            <h4>Oh, hi there</h4>
            <p>Here's some more content</p>
          </div>
        </p-collapse>
      </section>
      <section class="labelled" data-type="accordion">
        <p-collapse v-for="item in items" :key="item.key" ref="looped" ns="looped" :name="item.key">
          <h2 slot="title"><button class="p-has-no-style">{{ item.value }}</button></h2>
          <div slot="content">
            <h3>More content</h3>
            <p>This is the rest of the content for element {{ item.key }}, including a list</p>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </p-collapse>
        <p-collapse :key="10" ns="looped" name="10">
          <h2 slot="title"><button class="p-has-no-style">And this, from a manual entry</button></h2>
          <div slot="content">
            <h3>Perhaps this content should be slightly longer</h3>
            <p>This is going to be the longest content of the series, perhaps with a lorum ipsum below</p>
            <h4>Lorum Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a efficitur turpis. Etiam bibendum dapibus tellus nec hendrerit. Aenean mattis euismod est. Vivamus fringilla dignissim tortor, non fringilla arcu viverra quis. Sed arcu ipsum, porttitor ac nibh vel, commodo pretium dolor. Vestibulum sit amet magna eu neque tempor ornare vitae nec velit. Donec nec velit a magna sollicitudin dignissim. Nulla fermentum dolor ac nulla ultricies fringilla. Fusce egestas, sem vel ultricies commodo, arcu libero suscipit orci, ac luctus quam libero eget est. Suspendisse laoreet ante vitae aliquam tincidunt. Cras metus sem, interdum in ante eget, dapibus sodales mauris. Nunc sed volutpat lectus. Phasellus laoreet, sem id condimentum interdum, lacus dui interdum dolor, quis imperdiet libero tellus nec magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a efficitur turpis. Etiam bibendum dapibus tellus nec hendrerit. Aenean mattis euismod est. Vivamus fringilla dignissim tortor, non fringilla arcu viverra quis. Sed arcu ipsum, porttitor ac nibh vel, commodo pretium dolor. Vestibulum sit amet magna eu neque tempor ornare vitae nec velit. Donec nec velit a magna sollicitudin dignissim. Nulla fermentum dolor ac nulla ultricies fringilla. Fusce egestas, sem vel ultricies commodo, arcu libero suscipit orci, ac luctus quam libero eget est. Suspendisse laoreet ante vitae aliquam tincidunt. Cras metus sem, interdum in ante eget, dapibus sodales mauris. Nunc sed volutpat lectus. Phasellus laoreet, sem id condimentum interdum, lacus dui interdum dolor, quis imperdiet libero tellus nec magna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          </div>
        </p-collapse>
      </section>
      <section class="labelled" data-type="dialog">
        <button @click="showdialog" class="p-button">show a dialog</button>
        <p-popup title="Example dialog" ref="demoDialog">
          <button @click="clicky" class="p-button">wat</button>
        </p-popup>
      </section>
      <section class="labelled" data-type="sectionbar">
        <p-sectionbar color-bar="is-primary" callout="hotdog">
          <h4 style="margin-bottom: 6px">This is a sectionbar</h4>
          <p style="margin-bottom: 0;">This is a subtitle for the sectionbar</p>
        </p-sectionbar>
        <p-sectionbar color-bar="is-danger" callout="chevron">
          <h5 style="margin: 0;">Please secure your account by verifying your email</h5>
        </p-sectionbar>
        <p-sectionbar callout="hamburger">
          <h4 style="margin-bottom: 6px">A rather plain sectionbar</h4>
          <p style="margin-bottom: 0;">With some more additional text to describe it. This sectionbar has a callout but no color bar.</p>
        </p-sectionbar>
        <p-sectionbar color-bar="is-success" icon="/quackIcon.svg">
          <h5 style="margin-bottom: 6px">A sectionbar with an icon, but no callout</h5>
          <p style="margin-bottom: 0px;">Additional helper text and stuff</p>
        </p-sectionbar>
        <p-sectionbar color-bar="is-warning" icon="/quackIcon.svg" callout="plus">
          <p style="margin-bottom: 0px;">Another section with all the things!</p>
        </p-sectionbar>
      </section>
    </main>
  </div>
</template>

<script>
import colorPalette from './ColorPalette.vue'
import StyleGuide from './StyleGuide'
import ModalContent from './ModalContent'
import DemoHeader from './DemoHeader'

export default {
  name: 'app',
  components: { StyleGuide, ModalContent, DemoHeader, colorPalette },
  mounted() {
    this.$refs.looped[0].show()
  },
  methods: {
    inputIsLong(value) {
      if (value.length > 5) {
        return { msg: 'that input is long', class: 'success', icon: 'success' }
      }
      else {
        return { msg: 'input is not long enough', class: 'warning', icon: 'alert'}
      }
    },
    showModal(ref) { this.$refs[ref].show() },
    hideModal(ref) { this.$refs[ref].hide() },
    showRemote() { this.$modal.show("remote") },
    showtoast() { this.$toast.push({ msg:'<h3>Hello I demonstrate toasts</h3>' }) },
    forcetoast() { this.$toast.push({ msg:'<div style="display: flex;"><span class="p-button is-primary is-loading" style="border: none; padding: 0; width: 1.2rem; box-shadow: none;"></span><h3 style="margin-left: 2.4rem">Hello I am important and loading something</h3></div>', timeout: 0 }, true) },
    forcetoast2() { this.$toast.push({ msg:'<h3>Hello I am also important</h3>', timeout: 0, type: 'is-danger is-light' }, true) },
    forcetoast3() { this.$toast.push({ msg:'<h3>I am the most importantest</h3>', timeout: 3600, type: 'is-success is-light' }, true) },
    closetoast() { this.$toast.hide() },
    cleartoast() { this.$toast.hide(true) },
    clicky() { this.$toast.push({ msg:'<h3>You did a thing! I closed the dialog!</h3>', timeout: 1200, type: 'is-danger' }); this.$refs.demoDialog.hide() },
    showdialog() { this.$refs.demoDialog.show() },
    shown() { this.$toast.push({ msg: '<h3>Modal shown!' })},
    hidden() { this.$toast.push({ msg: '<h3>Modal hidden!', type: 'is-danger' })}
  },
  data () {
    return {
      toggleModel: true,
      inputModel: '',
      selectModel: '',
      multiselectModel: [],
      items: [
        { key: 'one', value: 'Hello there'},
        { key: 'two', value: 'This was generated'},
        { key: 'three', value: 'From a loop'}
      ]
    }
  }
}
</script>

<style lang="sass">
@import '~propellant/propellant'
@import '~propellant/scss/demo'

section.collapse
  padding-top: 1.2rem
  padding-bottom: 1.2rem
article.collapse
  border-top: 1px solid colors(gray, light)
  .collapse-title
    transition: 0.3s
    &.expanded
       color: colors(primary)

.modal-container, .popup-container
  padding: 2.4rem
  background-color: colors(background, light)

.documentation.collapse
  border-top: none
</style>
