import { appendCoverElement, removeCoverElement } from './cover-element'

function isKeyCombinationActive() {
  return event.metaKey
}
function onMousemove(event) {
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
window.removeEventListener('mousemove', onMousemove)
window.removeEventListener('scroll', onMousemove)
window.removeEventListener('wheel', onMousemove)
window.addEventListener('mousemove', onMousemove)
window.addEventListener('scroll', onMousemove)
window.addEventListener('wheel', onMousemove)
