export default {
  introduction: 'a sliding toggle-switch',
  description: `
  _switchbox_ requires Vue 2.3.0+ as it uses \`.sync\` to keep the internal and external state synchronized.
  `,
  token: `
  <p-switchbox
        :labels="['foo', 'bar']"
        :model.sync="myModelObject"/>`
}
