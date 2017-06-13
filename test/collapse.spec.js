/* eslint no-unused-vars: 0 */
import avoriaz, { mount } from 'avoriaz'
import should from 'should'
import sinon from 'sinon'
import propellant, { events, pCollapse } from 'propellant'
import { compileToFunctions } from 'vue-template-compiler'

avoriaz.use(propellant)

describe('collapse.vue', () => {
  const title = [compileToFunctions('<h1 class="test-title">test-title</h1>')]
  const content = [compileToFunctions('<p class="test-content">test-content</p>')]

  it('defaults to being collapsed', () => {
    const component = mount(pCollapse, { propsData: { name: 'foo' } })
    component.vm.isExpanded.should.be.false()
  })

  it('respects the expanded prop for initial collapsed state', () => {
    const component = mount(pCollapse, { propsData: { name: 'foo', expanded: true } })
    component.vm.isExpanded.should.be.true()
  })

  // this will cause an error because anime.js wants a real browser - the test will pass/fail as normal
  it('can be expanded using show', () => {
    const component = mount(pCollapse, {
      propsData: { name: 'foo' }
    })
    component.vm.show()
    component.vm.isExpanded.should.be.true()
  })

  // this will cause an error because anime.js wants a real browser - the test will pass/fail as normal
  it('can be collapsed using hide', () => {
    const component = mount(pCollapse, { propsData: { name: 'foo', expanded: true } })
    component.vm.hide()
    component.vm.isExpanded.should.be.false()
  })

  it('can be expanded or collapsed using toggle', () => {
    const component = mount(pCollapse, { propsData: { name: 'foo' } })
    component.vm.toggle()
    component.vm.isExpanded.should.be.true()
    component.vm.toggle()
    component.vm.isExpanded.should.be.false()
  })

  it('renders a wrapper article with class collapse', () => {
    const component = mount(pCollapse, { propsData: { name: 'foo' } })
    component.is('article').should.be.true()
    component.hasClass('collapse').should.be.true()
  })

  it('renders a header through slots', () => {
    const component = mount(pCollapse, {
      propsData: { name: 'foo' },
      slots: { title, content }
    })
    const slottedHeader = component.find('h1')[0]
    slottedHeader.is('h1').should.be.true()
  })

  it('does not render content through slots on initial paint', () => {
    const component = mount(pCollapse, {
      propsData: { name: 'foo' },
      slots: { title, content }
    })
    const slottedContent = component.find('p')[0]
    should(slottedContent).be.undefined()
  })

  it('does not set up a listener for accordion events when no ns prop is present', () => {
    const component = mount(pCollapse, {
      propsData: { name: 'foo' },
      slots: { title, content }
    })
    const spy = sinon.spy(component.vm, 'hide')
    events.$emit('collapse:accordion', 'testing', 'bar')
    spy.calledOnce.should.be.false()
  })

  it('sets up a listener for accordion events when there is a ns prop', () => {
    const component = mount(pCollapse, {
      propsData: { name: 'foo', ns: 'testing' },
      slots: { title, content }
    })
    const spy = sinon.spy(component.vm, 'hide')
    events.$emit('collapse:accordion', 'testing', 'bar')
    spy.calledOnce.should.be.true()
  })
})
