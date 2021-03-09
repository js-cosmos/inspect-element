import configs from '../configs'
import { appendCoverElements, removeCoverElements } from './cover-element'
import { appendSidelineElements, removeSidelineElements } from './sideline-element'

export const appendElements = target => {
  const computedStyle = window.getComputedStyle(target)
  const boundingClicentRect = target.getBoundingClientRect()

  appendCoverElements(computedStyle, boundingClicentRect)
  appendSidelineElements(computedStyle, boundingClicentRect)
}

export const removeElements = ev => {
  // count only for keyup
  if (ev) chrome.storage.sync.set({ count: configs.count + 1 })
  removeCoverElements()
  removeSidelineElements()
}
