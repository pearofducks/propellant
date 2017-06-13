export default {
  introduction: 'a box with a checkmark',
  description: `
  _checkbox_ requires Vue 2.3.0+ As it uses \`.sync\` to keep the internal and external state synchronized.
  `,
  token: `
  <p-checkbox
        label="check!"
        :model.sync="myModelObject"/>`
}
