import { findHoveredElement } from './find-element'
import { appendElements, removeElements } from './append-element'
import { printTargetElement } from './print-element'
import configs from '../configs'
import { MODIFIER_KEYS } from '../util'

let target: EventTarget | null

const isKeyCombinationActive = (event: MouseEvent) => {
  return (
    configs.modifierKeyCombination.every(key => (event as any)[key]) &&
    MODIFIER_KEYS.filter(key => configs.modifierKeyCombination.includes(key) === false).some(
      key => (event as any)[key],
    ) === false
  )
}
const onMousemove = (event: MouseEvent) => {
  if (!event || !event.target || event.target === document || isKeyCombinationActive(event) === false) {
    removeElements()
    return
  }

  target = findHoveredElement(event)

  if (target === null) return
  if (
    event &&
    event.target &&
    (event.target as HTMLElement).dataset &&
    (event.target as HTMLElement).dataset.inspectElement
  ) {
    // remove covered element first if move mouse over it
    removeElements()

    requestAnimationFrame(() => {
      if (target === null) return
      appendElements(target, event)
    })
  } else {
    appendElements(target, event)
  }
}

// appendStyleNode()
window.removeEventListener('mousemove', onMousemove)
window.addEventListener('mousemove', onMousemove)

window.removeEventListener('keyup', removeElements)
window.addEventListener('keyup', removeElements)

// print targetNode
const onClick = (event: MouseEvent) => {
  if (target === null) return
  printTargetElement(event, target)
}
window.removeEventListener('click', onClick)
window.addEventListener('click', onClick)
