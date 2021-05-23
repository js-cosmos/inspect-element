import configs from '../configs'
import { appendCoverElements, removeCoverElements } from './cover-element'
import { appendSidelineElements, removeSidelineElements } from './sideline-element'
import { appendRenderedElementInfo, removeRenderedElementInfo } from './rendered-element-info'

export const appendElements = (target: EventTarget, event: MouseEvent) => {
  const computedStyle = window.getComputedStyle(target as Element)
  const boundingClicentRect = (target as Element).getBoundingClientRect()

  appendCoverElements(computedStyle, boundingClicentRect)
  appendSidelineElements(computedStyle, boundingClicentRect)
  appendRenderedElementInfo(computedStyle, boundingClicentRect, event)
}

export const removeElements = (ev?: KeyboardEvent) => {
  // count only for keyup
  if (ev) chrome.storage.sync.set({ count: configs.count + 1 })
  removeCoverElements()
  removeSidelineElements()
  removeRenderedElementInfo()
}
