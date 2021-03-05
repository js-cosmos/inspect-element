import { appendCoverElements, removeCoverElements } from './cover-element'
import { appendSidelineElements, removeSidelineElements } from './sideline-element'
import { appendStyleInfoEelment, removeStyleInfoEelment } from './style-info-element'

export const appendElements = (target, mouseEvent) => {
  const computedStyle = window.getComputedStyle(target)
  const boundingClicentRect = target.getBoundingClientRect()

  appendCoverElements(computedStyle, boundingClicentRect)
  appendSidelineElements(computedStyle, boundingClicentRect)
  appendStyleInfoEelment(computedStyle, boundingClicentRect, mouseEvent, target)
}

export const removeElements = () => {
  removeCoverElements()
  removeSidelineElements()
  removeStyleInfoEelment()
}
