<template>
  <section class="p-sectionbar" :class="colorBar">
    <div class="p-sectionbar-color"></div>
    <div class="p-sectionbar-icon" v-if="icon" :style="{ backgroundImage: `url(${icon})` }" alt="icon"></div>
    <div class="p-sectionbar-content">
      <slot></slot>
    </div>
    <div class="p-sectionbar-callout" v-if="callout">
      <svg v-if="callout === 'chevron'" id="p-sectionbar-chevron" viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
        <path d="M12 30 L24 16 12 2" />
      </svg>
      <svg v-if="callout === 'hamburger'" id="p-sectionbar-hamburger" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
      </svg>
      <svg v-if="callout === 'hotdog'" id="p-sectionbar-hotdog" viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <circle cx="16" cy="7" r="2" />
        <circle cx="16" cy="16" r="2" />
        <circle cx="16" cy="25" r="2" />
      </svg>
      <svg v-if="callout === 'plus'" id="p-sectionbar-plus" viewBox="0 0 32 32" width="18" height="18" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3">
        <path d="M16 2 L16 30 M2 16 L30 16" />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pSectionbar',
  props: {
    colorBar: {
      type: String,
      default: undefined,
      note: 'a css class to append to the entire sectionbar, useful for setting a border property'
    },
    icon: {
      type: String,
      default: undefined,
      note: 'location to an icon that will be brought in via background-image'
    },
    callout: {
      type: String,
      default: undefined,
      note: 'a callout on the right of the sectionbar, one of: chevron, hamburger, hotdog, plus'
    },
  }
}
</script>
