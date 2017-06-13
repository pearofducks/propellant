/* eslint no-unused-vars: 0 */
import { mount } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import { pSwitchbox } from 'propellant'

describe('switchbox.vue', () => {
  it('renders a wrapper div with class input-group', () => {
    const model = false
    const component = mount(pSwitchbox, { propsData: { model } })
    component.is('div').should.be.true()
    component.hasClass('input-group').should.be.true()
  })
  it('renders the label with the correct class and using a prop for text', () => {
    const labels = ['this is a label']
    const model = false
    const component = mount(pSwitchbox, { propsData: { labels, model } })
    const labelEl = component.find('label')[0]
    labelEl.hasClass('switch').should.be.true()
    const rendered = labelEl.text().trim()
    rendered.should.be.exactly(labels[0])
  })
  it('renders the label correctly when only the second element is used', () => {
    const labels = ['', 'this is a label']
    const model = false
    const component = mount(pSwitchbox, { propsData: { labels, model } })
    const labelEl = component.find('label')[0]
    const rendered = labelEl.text().trim()
    rendered.should.be.exactly(labels[1])
  })
  it('renders the label correctly when both label elements are used', () => {
    const labels = ['this-is-a-label', 'this-is-also-a-label']
    const model = false
    const component = mount(pSwitchbox, { propsData: { labels, model } })
    const labelEl = component.find('label')[0]
    const rendered = labelEl.text().replace(/\s/g, '')
    rendered.should.be.exactly(labels.join(''))
  })
  it('renders nothing for the label prop when not provided', () => {
    const label = ''
    const model = false
    const component = mount(pSwitchbox, { propsData: { model } })
    const rendered = component.find('label')[0].text().trim()
    rendered.should.be.exactly(label)
  })
  it('it re-uses the model internally as a computed property', () => {
    const model = false
    const component = mount(pSwitchbox, { propsData: { model } })
    component.vm.innerModel.should.be.exactly(model)
  })
  it('it reacts to the input field being changed', () => {
    const model = false
    const component = mount(pSwitchbox, { propsData: { model } })
    const input = component.find('input')[0]
    const spy = sinon.spy(component.vm, '$emit')
    input.element.checked = true
    input.dispatch('change')
    // the type of event - this causes :model.sync to work for Vue
    // https://vuejs.org/v2/guide/components.html#sync-Modifier
    spy.args[0][0].should.be.exactly('update:model')
    // the event payload
    spy.args[0][1].should.be.true()
  })
})
