export const MODIFIER_KEYS = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey']

export const getContentTopPosition = (computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  return boundingClicentRect.top + getPaddingTop(computedStyle) + getBorderTopWidth(computedStyle)
}

export const getContentRightPosition = (computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  return boundingClicentRect.right - getPaddingRight(computedStyle) - getBorderRightWidth(computedStyle)
}

export const getContentBottomPosition = (computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  return boundingClicentRect.bottom - getPaddingBottom(computedStyle) - getBorderBottomWidth(computedStyle)
}

export const getContentLeftPosition = (computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  return boundingClicentRect.left + getPaddingLeft(computedStyle) + getBorderLeftWidth(computedStyle)
}

export const getContentWidth = (computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  return (
    getContentRightPosition(computedStyle, boundingClicentRect) -
    getContentLeftPosition(computedStyle, boundingClicentRect)
  )
}

export const getContentHeight = (computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  return (
    getContentBottomPosition(computedStyle, boundingClicentRect) -
    getContentTopPosition(computedStyle, boundingClicentRect)
  )
}

export const getPaddingTop = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.paddingTop, 10), 0)
}
export const getPaddingRight = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.paddingRight, 10), 0)
}
export const getPaddingBottom = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.paddingBottom, 10), 0)
}
export const getPaddingLeft = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.paddingLeft, 10), 0)
}

export const getBorderTopWidth = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.borderTopWidth, 10), 0)
}
export const getBorderRightWidth = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.borderRightWidth, 10), 0)
}
export const getBorderBottomWidth = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.borderBottomWidth, 10), 0)
}
export const getBorderLeftWidth = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.borderLeftWidth, 10), 0)
}

export const getMarginTop = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.marginTop, 10), 0)
}
export const getMarginRight = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.marginRight, 10), 0)
}
export const getMarginBottom = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.marginBottom, 10), 0)
}
export const getMarginLeft = (computedStyle: CSSStyleDeclaration) => {
  return Math.max(parseInt(computedStyle.marginLeft, 10), 0)
}
