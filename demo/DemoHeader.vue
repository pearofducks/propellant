<template>
  <header class="docs">
    <div class="logo-wrapper">
      <section class="logo">
        <div class="demo-icon">
          <svg class="propeller" height="100%" viewBox="0 0 155 154" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"> <linearGradient id="grad1" gradientUnits="objectBoundingBox" x1="0.75" y1="0" x2="0.5" y2="0.75" gradientTransform="rotate(10)"> <stop class="from-color" offset="0" stop-opacity="0.4"/> <stop class="to-color" offset="1" stop-opacity="0.8"/> </linearGradient> <linearGradient id="grad2" gradientUnits="objectBoundingBox" x1="0.25" y1="0.8" x2="0.75" y2="0" gradientTransform="rotate(10)"> <stop class="from-color" offset="0" stop-opacity="0.4"/> <stop class="to-color" offset="1" stop-opacity="0.8"/> </linearGradient> <linearGradient id="grad3" gradientUnits="objectBoundingBox" x1="0.9" y1="0.6" x2="0.5" y2="0" gradientTransform="rotate(10)"> <stop class="from-color" offset="0" stop-opacity="0.4"/> <stop class="to-color" offset="1" stop-opacity="0.8"/> </linearGradient> <g> <path class="bottom-blade" d="M69.164,67.503c0,0 -23.145,18.06 -34.315,63.131c-2.406,9.707 3.522,19.542 13.229,21.947c9.707,2.406 19.542,-3.522 21.948,-13.229c11.17,-45.071 -0.862,-71.849 -0.862,-71.849l0,0Z" fill="url(#grad2)" style="stroke:#000;stroke-width:0px;"/> <path class="left-blade" d="M69.232,67.347c0,0 -4.068,-29.075 -37.515,-61.284c-7.204,-6.937 -18.685,-6.72 -25.622,0.484c-6.937,7.203 -6.721,18.684 0.483,25.621c33.447,32.209 62.654,35.179 62.654,35.179Z" fill="url(#grad1)" style="stroke:#000;stroke-width:0px;"/> <path class="right-blade" d="M69.23,67.346c0,0 27.213,11.014 71.831,-1.848c9.609,-2.77 15.162,-12.821 12.392,-22.43c-2.77,-9.61 -12.821,-15.163 -22.431,-12.393c-44.617,12.862 -61.792,36.671 -61.792,36.671l0,0Z" fill="url(#grad3)" style="stroke:#000;stroke-width:0px;"/> <path class="center-color" d="M71.292,59.19c4.588,1.137 7.39,5.785 6.253,10.373c-1.137,4.588 -5.785,7.39 -10.374,6.253c-4.588,-1.137 -7.389,-5.785 -6.252,-10.373c1.137,-4.588 5.785,-7.39 10.373,-6.253l0,0Z" style="stroke:#000;stroke-width:0px;"/> </g> </svg>
        </div>
        <h1 class="title">propellant 
<!--           <span class="bar">|</span>
          <span class="large">components</span>
 -->        </h1>
      </section>
      <section class="logo">
        <h4 class="subtitle">Vue.js components</h4>
      </section>
    </div>
    <slot></slot>
  </header>
</template>

<script>
export default { name: 'DemoHeader' }
</script>
