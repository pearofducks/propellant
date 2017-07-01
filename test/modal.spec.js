/* eslint no-unused-vars: 0 */
import avoriaz, { mount } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import propellant, { pModal, events } from 'prpllnt'

avoriaz.use(propellant)

describe('modal.vue', () => {
  it('defaults to being hidden', () => {
    const component = mount(pModal)
    component.vm.visible.should.be.false()
  })

  it('can be shown/hidden using show/hide', () => {
    const component = mount(pModal)
    component.vm.show()
    component.vm.visible.should.be.true()
    component.vm.hide()
    component.vm.visible.should.be.false()
  })

  it('can be remotely shown using events', () => {
    const component = mount(pModal, {
      propsData: { name: 'test-modal' }
    })
    const spy = sinon.spy(component.vm, 'show')
    events.$emit('modal:show', 'test-modal')
    component.vm.visible.should.be.true()
    spy.calledOnce.should.be.true()
  })

  it('can be remotely hidden using events', () => {
    const component = mount(pModal, {
      propsData: { name: 'test-modal' }
    })
    const spy = sinon.spy(component.vm, 'hide')
    events.$emit('modal:hide', 'test-modal')
    component.vm.visible.should.be.false()
    spy.calledOnce.should.be.true()
  })
})
