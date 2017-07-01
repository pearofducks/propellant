/* eslint no-unused-vars: 0 */
import { mount } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import { pCheckbox } from 'prpllnt'

describe('checkbox.vue', () => {
  it('renders a wrapper div with class p-input-group', () => {
    const value = false
    const component = mount(pCheckbox, { propsData: { value } })
    component.is('div').should.be.true()
    component.hasClass('p-input-group').should.be.true()
  })
  it('renders the label with the correct class and using a prop for text', () => {
    const label = 'this is a label'
    const value = false
    const component = mount(pCheckbox, { propsData: { label, value } })
    const labelEl = component.first('label')
    const rendered = labelEl.text().trim()
    labelEl.hasClass('p-checkbox').should.be.true()
    rendered.should.be.exactly(label)
  })
  it('renders nothing for the label prop when not provided', () => {
    const label = ''
    const value = false
    const component = mount(pCheckbox, { propsData: { value } })
    const rendered = component.first('label').text().trim()
    rendered.should.be.exactly(label)
  })
  it('it re-uses the model internally as a computed property', () => {
    const value = false
    const component = mount(pCheckbox, { propsData: { value } })
    component.vm.innerModel.should.be.exactly(value)
  })
  it('it reacts to the input field being changed', () => {
    const value = false
    const component = mount(pCheckbox, { propsData: { value } })
    const input = component.first('input')
    const spy = sinon.spy(component.vm, 'stateFromEvent')
    input.element.checked = true
    input.trigger('change')
    spy.calledOnce.should.be.true()
  })
})
