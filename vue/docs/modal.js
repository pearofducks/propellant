export default {
  introduction: 'a component with a clickable backdrop for presenting the user new contexts',
  description: `
  _modal_ is primarily intended for in-depth interactions from the user, such as forms or presenting other components.

  Most _modals_ will be shown through refs by calling \`this.$refs.myRef.show()\`. A \`hide()\` method is also available.

  _modals_ can also be controlled through events when a \`name\` is specified:
  - \`modal:show\` - show a _modal_ with the name specified
  - \`modal:hide\` - hide a _modal_ with the name specified


  To aid in calling these events, the following methods are globally enabled:
  - \`this.$modal.show("myModal")\` - show _myModal_
  - \`this.$modal.hide("myModal")\` - hide _myModal_
  `,
  token: `
<p-modal ref="example">
  <myComponent></myComponent>
</p-modal>
  `
}
