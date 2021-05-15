import configs from '../configs'
import { appendCoverElements, removeCoverElements } from './cover-element'
import { appendSidelineElements, removeSidelineElements } from './sideline-element'
import { appendRenderedElementInfo, removeRenderedElementInfo } from './rendered-element-info'

export const appendElements = (target, event) => {
  const computedStyle = window.getComputedStyle(target)
  const boundingClicentRect = target.getBoundingClientRect()

  appendCoverElements(computedStyle, boundingClicentRect)
  appendSidelineElements(computedStyle, boundingClicentRect)
  appendRenderedElementInfo(computedStyle, boundingClicentRect, event)
}

export const removeElements = ev => {
  // count only for keyup
  if (ev) chrome.storage.sync.set({ count: configs.count + 1 })
  removeCoverElements()
  removeSidelineElements()
  removeRenderedElementInfo()
}
