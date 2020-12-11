// create and return style node
export function createStyleNode(style) {
  throw Error('Not yet implemented.')
}

export const MODIFIER_KEYS = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey']

export const getContentTopPosition = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.top + getPaddingTop(computedStyle) + getBorderTopWidth(computedStyle)
}

export const getContentRightPosition = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.right - getPaddingRight(computedStyle) - getBorderRightWidth(computedStyle)
}

export const getContentBottomPosition = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.bottom - getPaddingBottom(computedStyle) - getBorderBottomWidth(computedStyle)
}

export const getContentLeftPosition = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.left + getPaddingLeft(computedStyle) + getBorderLeftWidth(computedStyle)
}

export const getContentWidth = (computedStyle, boundingClicentRect) => {
  return (
    getContentRightPosition(computedStyle, boundingClicentRect) -
    getContentLeftPosition(computedStyle, boundingClicentRect)
  )
}

export const getContentHeight = (computedStyle, boundingClicentRect) => {
  return (
    getContentBottomPosition(computedStyle, boundingClicentRect) -
    getContentTopPosition(computedStyle, boundingClicentRect)
  )
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

export const getBoxModelWidth = (computedStyle, boundingClicentRect) => {
  return (
    parseInt(getContentWidth(computedStyle, boundingClicentRect)) +
    getBorderLeftWidth(computedStyle) +
    getBorderRightWidth(computedStyle)
  )
}

export const getBoxModelHeight = (computedStyle, boundingClicentRect) => {
  return (
    parseInt(getContentHeight(computedStyle, boundingClicentRect)) +
    getBorderTopWidth(computedStyle) +
    getBorderBottomWidth(computedStyle)
  )
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

export const rgbaToHex = rgba => {
  if (!/^rgba?/.test(rgba)) return rgba
  const match = rgba.match(/rgba?\((.*)\)/)
  const rgbaArgs = match?.[1].split(',')
  const hexString = rgbaArgs
    .map((int, i, arr) => {
      let hex = ''
      const isRgba = arr.length === 4
      const isLast = i === arr.length - 1
      if (isRgba && isLast) hex = Math.round(int * 255).toString(16)
      else hex = parseInt(int).toString(16)
      return hex.length === 1 ? `0${hex}` : hex
    })
    .join('')
  return `#${hexString}`
}
