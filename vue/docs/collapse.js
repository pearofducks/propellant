export default {
  introduction: 'a collapsible element with a title and content section, as well as an accordion',
  description: `
  _collapse_ will automatically function as an accordion when \`ns\` is provided.
  All components sharing the same \`ns\` will act as part of the same accordion.

  A toggle method must be specified in props, or the _collapse_ will not be expandable.

  _collapse_ will emit the following events:
  - \`collapse:accordion\` - will be emitted on the propellant event-bus and used by other _collapse_ on the same namespace
  - \`collapse:shown\` - emitted directly by a _collapse_ when expanded
  - \`collapse:hidden\` - emitted directly by a _collapse_ when collapsed
  `,
  token: `
<p-collapse name="demo-second">
  <h1 slot="title">I do not!</h1>
  <h5 slot="showmore">show more</h5>
  <h5 slot="showless">show less</h5>
  <p slot="content">I am content!</p>
</p-collapse>   
  `
}
