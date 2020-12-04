import { appendCoverElements, removeCoverElements } from './cover-element'

export const appendElements = target => {
  const computedStyle = window.getComputedStyle(target)
  const boundingClicentRect = target.getBoundingClientRect()

  appendCoverElements(computedStyle, boundingClicentRect)
}

export const removeElements = () => {
  removeCoverElements()
}
