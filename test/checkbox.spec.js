/* eslint no-unused-vars: 0 */
import { mount } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import { pCheckbox } from 'propellant'

describe('checkbox.vue', () => {
  it('renders a wrapper div with class input-group', () => {
    const model = false
    const component = mount(pCheckbox, { propsData: { model } })
    component.is('div').should.be.true()
    component.hasClass('input-group').should.be.true()
  })
  it('renders the label with the correct class and using a prop for text', () => {
    const label = 'this is a label'
    const model = false
    const component = mount(pCheckbox, { propsData: { label, model } })
    const labelEl = component.find('label')[0]
    const rendered = labelEl.text().trim()
    labelEl.hasClass('checkbox').should.be.true()
    rendered.should.be.exactly(label)
  })
  it('renders nothing for the label prop when not provided', () => {
    const label = ''
    const model = false
    const component = mount(pCheckbox, { propsData: { model } })
    const rendered = component.find('label')[0].text().trim()
    rendered.should.be.exactly(label)
  })
  it('it re-uses the model internally as a computed property', () => {
    const model = false
    const component = mount(pCheckbox, { propsData: { model } })
    component.vm.innerModel.should.be.exactly(model)
  })
  it('it reacts to the input field being changed', () => {
    const model = false
    const component = mount(pCheckbox, { propsData: { model } })
    const input = component.find('input')[0]
    const spy = sinon.spy(component.vm, '$emit')
    input.element.checked = true
    input.dispatch('change')
    // the type of event
    spy.args[0][0].should.be.exactly('update:model')
    // the event payload
    spy.args[0][1].should.be.true()
  })
})
