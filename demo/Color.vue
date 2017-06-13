<template>
  <div class="color">
    <article class="swatch"
             v-for="shade in ['dark', 'base', 'light']" v-if="color[shade]"
             :style="{ backgroundColor: color[shade] }"
             :class="{ 'is-dark': darkColor(color[shade]) }"
             @click="copy($event)">
      <p class="hex">{{color[shade]}}</p>
      <span class="flasher">COPY</span>
    </article>
    <article class="swatch-text">
      <h5>{{color.name}}</h5>
    </article>
  </div>
</template>
<script>
export default {
  name: 'color',
  props: ['color'],
  methods: {
    darkColor(c) {
      var c = c.substring(1);      // strip #
      var rgb = parseInt(c, 16);   // convert rrggbb to decimal
      var r = (rgb >> 16) & 0xff;  // extract red
      var g = (rgb >>  8) & 0xff;  // extract green
      var b = (rgb >>  0) & 0xff;  // extract blue
      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
      if (luma < 150) return true
    },
    copy(e) {
      var text = e.target.parentElement.querySelector('.hex').textContent;
      var textarea = document.createElement("textarea");
      var copybutton = e.target.querySelector('.flasher')
      textarea.textContent = text;
      textarea.style.top = 0;
      textarea.style.opacity = 0;
      textarea.style.position = "absolute";
      copybutton.appendChild(textarea);
      textarea.select();
      var result = document.execCommand("copy");
      copybutton.removeChild(textarea);
      if(result) {
        copybutton.textContent="COPIED";
        setTimeout(function() { copybutton.textContent="COPY" }, 500)
      }
    }
  }
}
</script>
