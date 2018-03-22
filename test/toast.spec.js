/* eslint no-unused-vars: 0 */
import Vue from 'vue'
import { shallow } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import propellant, { pToast, events } from 'prpllnt'

Vue.use(propellant)

describe('toast.vue', () => {
  it('toast is not showing when spawned', () => {
    const component = shallow(pToast)
    component.update()
    component.vm.showing.should.be.false()
  })
  it('opens a toast when it receives a push event', () => {
    const component = shallow(pToast)
    const spy = sinon.spy(component.vm, 'show')
    events.$emit('toast:push')
    component.update()
    spy.calledOnce.should.be.true()
    component.vm.showing.should.be.true()
    component.vm.msg.should.be.exactly('<h3>Salutations, I am a toast.</h3>')
    component.vm.timer.should.not.be.null()
  })
})
