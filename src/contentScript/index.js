import { appendStyleNode } from './style'
import { findHoveredElement } from './find-element'
import { appendCoverElement } from './cover-element'

function onMousemove(event) {
  const hoveredElement = findHoveredElement(event)
  appendCoverElement(hoveredElement)
}

appendStyleNode()
window.removeEventListener('mousemove', onMousemove)
window.addEventListener('mousemove', onMousemove)
