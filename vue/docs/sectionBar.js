export default {
  introduction: 'a mobile-first element for a variety of purposes',
  description: `
  _sectionbar_ has a single default slot, and outside of the options offered through props has very few moving parts.
  `,
  token: `
<p-sectionbar 
      @click.native="doSomething"
      color-bar="warning-color"
      icon="warning-icon.svg"
      callout="plus">
  <p>A sectionbar with all the things!</p>
</p-sectionbar>
  `
}
