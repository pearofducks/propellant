let events

export { events }

export function eventSetup (Vue) {
  events = new Vue()
}

export const modal = {
  hide (name) {
    events.$emit('modal:hide', name)
  },
  show (name) {
    events.$emit('modal:show', name)
  }
}

export const toast = {
  push (opts, force) {
    events.$emit('toast:push', opts, force)
  },
  hide (clear) {
    events.$emit('toast:hide', clear)
  }
}

export const collapse = {
  hide (namespace, name) {
    events.$emit('collapse:hide', namespace, name)
  },
  show (namespace, name) {
    events.$emit('collapse:show', namespace, name)
  }
}
