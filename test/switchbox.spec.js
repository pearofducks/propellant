/* eslint no-unused-vars: 0 */
import { mount } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import { pSwitchbox } from 'prpllnt'

describe('switchbox.vue', () => {
  it('renders a wrapper div with class p-input-group', () => {
    const value = false
    const component = mount(pSwitchbox, { propsData: { value } })
    component.is('div').should.be.true()
    component.hasClass('p-input-group').should.be.true()
  })
  it('renders the label with the correct class and using a prop for text', () => {
    const labels = ['this is a label']
    const value = false
    const component = mount(pSwitchbox, { propsData: { labels, value } })
    const labelEl = component.first('label')
    labelEl.hasClass('p-switchbox').should.be.true()
    const rendered = labelEl.text().trim()
    rendered.should.be.exactly(labels[0])
  })
  it('renders the label correctly when only the second element is used', () => {
    const labels = ['', 'this is a label']
    const value = false
    const component = mount(pSwitchbox, { propsData: { labels, value } })
    const labelEl = component.first('label')
    const rendered = labelEl.text().trim()
    rendered.should.be.exactly(labels[1])
  })
  it('renders the label correctly when both label elements are used', () => {
    const labels = ['this-is-a-label', 'this-is-also-a-label']
    const value = false
    const component = mount(pSwitchbox, { propsData: { labels, value } })
    const labelEl = component.first('label')
    const rendered = labelEl.text().replace(/\s/g, '')
    rendered.should.be.exactly(labels.join(''))
  })
  it('renders nothing for the label prop when not provided', () => {
    const label = ''
    const value = false
    const component = mount(pSwitchbox, { propsData: { value } })
    const rendered = component.first('label').text().trim()
    rendered.should.be.exactly(label)
  })
  it('it re-uses the model internally as a computed property', () => {
    const value = false
    const component = mount(pSwitchbox, { propsData: { value } })
    component.vm.innerModel.should.be.exactly(value)
  })
  it('it reacts to the input field being changed', () => {
    const value = false
    const component = mount(pSwitchbox, { propsData: { value } })
    const input = component.first('input')
    const spy = sinon.spy(component.vm, 'stateFromEvent')
    input.element.checked = true
    input.trigger('change')
    spy.calledOnce.should.be.true()
  })
})
