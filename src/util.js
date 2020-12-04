// create and return style node
export function createStyleNode(style) {
  throw Error('Not yet implemented.')
}

export const MODIFIER_KEYS = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey']

export const getContentTop = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.top + getPaddingTop(computedStyle) + getBorderTopWidth(computedStyle)
}

export const getContentRight = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.right - getPaddingRight(computedStyle) - getBorderRightWidth(computedStyle)
}

export const getContentBottom = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.bottom - getPaddingBottom(computedStyle) - getBorderBottomWidth(computedStyle)
}

export const getContentLeft = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.left + getPaddingLeft(computedStyle) + getBorderLeftWidth(computedStyle)
}

export const getContentWidth = (computedStyle, boundingClicentRect) => {
  return getContentRight(computedStyle, boundingClicentRect) - getContentLeft(computedStyle, boundingClicentRect)
}

export const getContentHeight = (computedStyle, boundingClicentRect) => {
  return getContentBottom(computedStyle, boundingClicentRect) - getContentTop(computedStyle, boundingClicentRect)
}

export const getPaddingTop = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingTop, 10), 0)
}
export const getPaddingRight = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingRight, 10), 0)
}
export const getPaddingBottom = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingBottom, 10), 0)
}
export const getPaddingLeft = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingLeft, 10), 0)
}

export const getBorderTopWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderTopWidth, 10), 0)
}
export const getBorderRightWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderRightWidth, 10), 0)
}
export const getBorderBottomWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderBottomWidth, 10), 0)
}
export const getBorderLeftWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderLeftWidth, 10), 0)
}

export const getMarginTop = computedStyle => {
  return Math.max(parseInt(computedStyle.marginTop, 10), 0)
}
export const getMarginRight = computedStyle => {
  return Math.max(parseInt(computedStyle.marginRight, 10), 0)
}
export const getMarginBottom = computedStyle => {
  return Math.max(parseInt(computedStyle.marginBottom, 10), 0)
}
export const getMarginLeft = computedStyle => {
  return Math.max(parseInt(computedStyle.marginLeft, 10), 0)
}
