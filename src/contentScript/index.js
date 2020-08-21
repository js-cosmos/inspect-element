import { appendCoverElement, removeCoverElement } from './cover-element'

const isKeyCombinationActive = () => {
  return event.metaKey
}
const onMousemove = event => {
  if (!event || !event.target || event.target === document || isKeyCombinationActive(event) === false) {
    removeCoverElement()
    return
  }

  if (event && event.target && event.target.dataset && event.target.dataset.inspectElement) {
    // remove covered element first if move mouse over it
    removeCoverElement()

    requestAnimationFrame(() => {
      appendCoverElement(event.target)
    })
  } else {
    appendCoverElement(event.target)
  }
}

// appendStyleNode()
window.removeEventListener('mouseover', onMousemove)
window.addEventListener('mouseover', onMousemove)
