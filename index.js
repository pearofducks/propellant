import * as components from './vue/src'
import { events, collapse, modal, toast, eventSetup } from './vue/events'

let propellant = components

propellant.install = (Vue, options) => {
  eventSetup(Vue)
  for (let component in components) {
    if (components[component].name) {
      Vue.component(components[component].name, components[component])
    }
  }
  Object.defineProperty(Vue.prototype, '$collapse', { get: () => collapse })
  Object.defineProperty(Vue.prototype, '$modal', { get: () => modal })
  Object.defineProperty(Vue.prototype, '$toast', { get: () => toast })
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(propellant)
}

export default propellant
export * from './vue/src'
export { events }
