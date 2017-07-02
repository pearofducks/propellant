/* eslint no-unused-vars: 0 */
import { shallow } from 'avoriaz'
import should from 'should'
import { pPopup } from 'prpllnt'

describe('popup.vue', () => {
  it('defaults to being hidden', () => {
    const component = shallow(pPopup)
    component.vm.visible.should.be.false()
  })

  it('can be shown/hidden using show/hide', () => {
    const component = shallow(pPopup)
    component.vm.show()
    component.vm.visible.should.be.true()
    component.vm.hide()
    component.vm.visible.should.be.false()
  })
})
