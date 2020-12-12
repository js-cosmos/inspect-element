import { findHoveredElement } from './find-element'
import { appendElements, removeElements } from './append-element'
import { getTargetElement } from './print-element'
import configs from '../configs'
import { MODIFIER_KEYS } from '../util'

const isKeyCombinationActive = event => {
  return (
    configs.modifierKeyCombination.every(key => event[key]) &&
    MODIFIER_KEYS.filter(key => configs.modifierKeyCombination.includes(key) === false).some(key => event[key]) ===
      false
  )
}
const onMousemove = event => {
  if (!event || !event.target || event.target === document || isKeyCombinationActive(event) === false) {
    removeElements()
    return
  }

  const target = findHoveredElement(event)

  if (event && event.target && event.target.dataset && event.target.dataset.inspectElement) {
    // remove covered element first if move mouse over it
    removeElements()

    requestAnimationFrame(() => {
      appendElements(target)
    })
  } else {
    appendElements(target)
  }
}

// appendStyleNode()
window.removeEventListener('mousemove', onMousemove)
window.addEventListener('mousemove', onMousemove)

window.removeEventListener('keyup', removeElements)
window.addEventListener('keyup', removeElements)

// print targetNode
window.addEventListener('click', getTargetElement)
