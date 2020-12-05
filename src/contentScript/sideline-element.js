import configs, { onChange } from '../configs'
import {
  getContentTopPosition,
  getContentRightPosition,
  getContentBottomPosition,
  getContentLeftPosition,
  getBorderTopWidth,
  getBorderRightWidth,
  getBorderBottomWidth,
  getBorderLeftWidth,
  getMarginTop,
  getMarginRight,
  getMarginBottom,
  getMarginLeft,
} from '../util'

// listen color change event
let realCoverSidelineColor = undefined
const getRealCoverSidelineColor = () => {
  realCoverSidelineColor = configs.isCoverSidelineEnabled ? configs.coverSidelineColor : 'transparent'
}
getRealCoverSidelineColor()
onChange('coverSidelineColor', getRealCoverSidelineColor)
onChange('isCoverSidelineEnabled', getRealCoverSidelineColor)

let realPaddingSidelineColor = undefined
const getRealPaddingSidelineColor = () => {
  realPaddingSidelineColor = configs.isPaddingSidelineEnabled ? configs.paddingSidelineColor : 'transparent'
}
getRealPaddingSidelineColor()
onChange('paddingSidelineColor', getRealPaddingSidelineColor)
onChange('isPaddingSidelineEnabled', getRealPaddingSidelineColor)

let realBorderSidelineColor = undefined
const getRealBorderSidelineColor = () => {
  realBorderSidelineColor = configs.isBorderSidelineEnabled ? configs.borderSidelineColor : 'transparent'
}
getRealBorderSidelineColor()
onChange('borderSidelineColor', getRealBorderSidelineColor)
onChange('isBorderSidelineEnabled', getRealBorderSidelineColor)

let realMarginSidelineColor = undefined
const getRealMarginSidelineColor = () => {
  realMarginSidelineColor = configs.isMarginSidelineEnabled ? configs.marginSidelineColor : 'transparent'
}
getRealMarginSidelineColor()
onChange('marginSidelineColor', getRealMarginSidelineColor)
onChange('isMarginSidelineEnabled', getRealMarginSidelineColor)

// cover
const setCoverSidelineTopStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getCoverSidelineTop(computedStyle, boundingClicentRect) - 1 + 'px'
  element.style.left = '0'
  element.style.borderColor = realCoverSidelineColor
  element.style.borderTopWidth = '1px'
  element.style.width = '100vw'
}

const setCoverSidelineRightStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = getCoverSidelineRight(computedStyle, boundingClicentRect) + 'px'
  element.style.borderColor = realCoverSidelineColor
  element.style.borderRightWidth = '1px'
  element.style.height = '100vh'
}

const setCoverSidelineBottomStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getCoverSidelineBottom(computedStyle, boundingClicentRect) + 'px'
  element.style.left = '0'
  element.style.borderColor = realCoverSidelineColor
  element.style.borderBottomWidth = '1px'
  element.style.width = '100vw'
}

const setCoverSidelineLeftStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = getCoverSidelineLeft(computedStyle, boundingClicentRect) - 1 + 'px'
  element.style.borderColor = realCoverSidelineColor
  element.style.borderLeftWidth = '1px'
  element.style.height = '100vh'
}

// padding
const setPaddingSidelineTopStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getPaddingSidelineTop(computedStyle, boundingClicentRect) - 1 + 'px'
  element.style.left = '0'
  element.style.borderColor = realPaddingSidelineColor
  element.style.borderTopWidth = '1px'
  element.style.width = '100vw'
}

const setPaddingSidelineRightStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = getPaddingSidelineRight(computedStyle, boundingClicentRect) + 'px'
  element.style.borderColor = realPaddingSidelineColor
  element.style.borderRightWidth = '1px'
  element.style.height = '100vh'
}

const setPaddingSidelineBottomStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getPaddingSidelineBottom(computedStyle, boundingClicentRect) + 'px'
  element.style.left = '0'
  element.style.borderColor = realPaddingSidelineColor
  element.style.borderBottomWidth = '1px'
  element.style.width = '100vw'
}

const setPaddingSidelineLeftStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = getPaddingSidelineLeft(computedStyle, boundingClicentRect) - 1 + 'px'
  element.style.borderColor = realPaddingSidelineColor
  element.style.borderLeftWidth = '1px'
  element.style.height = '100vh'
}

// border
const setBorderSidelineTopStyle = (element, boundingClicentRect) => {
  element.style.top = boundingClicentRect.top - 1 + 'px'
  element.style.left = '0'
  element.style.borderColor = realBorderSidelineColor
  element.style.borderTopWidth = '1px'
  element.style.width = '100vw'
}

const setBorderSidelineRightStyle = (element, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = boundingClicentRect.right + 'px'
  element.style.borderColor = realBorderSidelineColor
  element.style.borderRightWidth = '1px'
  element.style.height = '100vh'
}

const setBorderSidelineBottomStyle = (element, boundingClicentRect) => {
  element.style.top = boundingClicentRect.bottom + 'px'
  element.style.left = '0'
  element.style.borderColor = realBorderSidelineColor
  element.style.borderBottomWidth = '1px'
  element.style.width = '100vw'
}

const setBorderSidelineLeftStyle = (element, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = boundingClicentRect.left - 1 + 'px'
  element.style.borderColor = realBorderSidelineColor
  element.style.borderLeftWidth = '1px'
  element.style.height = '100vh'
}

// margin
const setMarginSidelineTopStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getMarginSidelineTop(computedStyle, boundingClicentRect) - 1 + 'px'
  element.style.left = '0'
  element.style.borderColor = realMarginSidelineColor
  element.style.borderTopWidth = '1px'
  element.style.width = '100vw'
}

const setMarginSidelineRightStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = getMarginSidelineRight(computedStyle, boundingClicentRect) + 'px'
  element.style.borderColor = realMarginSidelineColor
  element.style.borderRightWidth = '1px'
  element.style.height = '100vh'
}

const setMarginSidelineBottomStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getMarginSidelineBottom(computedStyle, boundingClicentRect) + 'px'
  element.style.left = '0'
  element.style.borderColor = realMarginSidelineColor
  element.style.borderBottomWidth = '1px'
  element.style.width = '100vw'
}

const setMarginSidelineLeftStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = '0'
  element.style.left = getMarginSidelineLeft(computedStyle, boundingClicentRect) - 1 + 'px'
  element.style.borderColor = realMarginSidelineColor
  element.style.borderLeftWidth = '1px'
  element.style.height = '100vh'
}

// computed
const getCoverSidelineTop = (computedStyle, boundingClicentRect) => {
  return getContentTopPosition(computedStyle, boundingClicentRect)
}

const getCoverSidelineRight = (computedStyle, boundingClicentRect) => {
  return getContentRightPosition(computedStyle, boundingClicentRect)
}

const getCoverSidelineBottom = (computedStyle, boundingClicentRect) => {
  return getContentBottomPosition(computedStyle, boundingClicentRect)
}

const getCoverSidelineLeft = (computedStyle, boundingClicentRect) => {
  return getContentLeftPosition(computedStyle, boundingClicentRect)
}

const getPaddingSidelineTop = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.top + getBorderTopWidth(computedStyle)
}

const getPaddingSidelineRight = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.right - getBorderRightWidth(computedStyle)
}

const getPaddingSidelineBottom = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.bottom - getBorderBottomWidth(computedStyle)
}

const getPaddingSidelineLeft = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.left + getBorderLeftWidth(computedStyle)
}

const getMarginSidelineTop = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.top - getMarginTop(computedStyle)
}

const getMarginSidelineRight = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.right + getMarginRight(computedStyle)
}

const getMarginSidelineBottom = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.bottom + getMarginBottom(computedStyle)
}

const getMarginSidelineLeft = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.left - getMarginLeft(computedStyle)
}

const createElement = id => {
  const element = document.createElement('DIV')
  setSidelineStyle(element, id)
  return element
}

const setSidelineStyle = (element, id) => {
  element.dataset['inspectElement'] = 'inspectElement'
  element.id = `inspect-element-${id}`
  element.style.position = 'fixed'
  element.style.borderWidth = '0'
  element.style.borderStyle = 'dashed'
  element.style.zIndex = 9998
  element.style.pointerEvents = 'none'
}

const sidelineElements = {
  coverSidelineTop: createElement('cover-top-sideline'),
  coverSidelineRight: createElement('cover-right-sideline'),
  coverSidelineBottom: createElement('cover-bottom-sideline'),
  coverSidelineLeft: createElement('cover-left-sideline'),

  paddingSidelineTop: createElement('padding-top-sideline'),
  paddingSidelineRight: createElement('padding-right-sideline'),
  paddingSidelineBottom: createElement('padding-bottom-sideline'),
  paddingSidelineLeft: createElement('padding-left-sideline'),

  borderSidelineTop: createElement('border-top-sideline'),
  borderSidelineRight: createElement('border-right-sideline'),
  borderSidelineBottom: createElement('border-bottom-sideline'),
  borderSidelineLeft: createElement('border-left-sideline'),

  marginSidelineTop: createElement('margin-top-sideline'),
  marginSidelineRight: createElement('margin-right-sideline'),
  marginSidelineBottom: createElement('margin-bottom-sideline'),
  marginSidelineLeft: createElement('margin-left-sideline'),
}

export const appendSidelineElements = (computedStyle, boundingClicentRect) => {
  for (const element of Object.values(sidelineElements))
    if (document.body.contains(element) === false) document.body.appendChild(element)

  setCoverSidelineTopStyle(sidelineElements.coverSidelineTop, computedStyle, boundingClicentRect)
  setCoverSidelineRightStyle(sidelineElements.coverSidelineRight, computedStyle, boundingClicentRect)
  setCoverSidelineBottomStyle(sidelineElements.coverSidelineBottom, computedStyle, boundingClicentRect)
  setCoverSidelineLeftStyle(sidelineElements.coverSidelineLeft, computedStyle, boundingClicentRect)

  setPaddingSidelineTopStyle(sidelineElements.paddingSidelineTop, computedStyle, boundingClicentRect)
  setPaddingSidelineRightStyle(sidelineElements.paddingSidelineRight, computedStyle, boundingClicentRect)
  setPaddingSidelineBottomStyle(sidelineElements.paddingSidelineBottom, computedStyle, boundingClicentRect)
  setPaddingSidelineLeftStyle(sidelineElements.paddingSidelineLeft, computedStyle, boundingClicentRect)

  setBorderSidelineTopStyle(sidelineElements.borderSidelineTop, boundingClicentRect)
  setBorderSidelineRightStyle(sidelineElements.borderSidelineRight, boundingClicentRect)
  setBorderSidelineBottomStyle(sidelineElements.borderSidelineBottom, boundingClicentRect)
  setBorderSidelineLeftStyle(sidelineElements.borderSidelineLeft, boundingClicentRect)

  setMarginSidelineTopStyle(sidelineElements.marginSidelineTop, computedStyle, boundingClicentRect)
  setMarginSidelineRightStyle(sidelineElements.marginSidelineRight, computedStyle, boundingClicentRect)
  setMarginSidelineBottomStyle(sidelineElements.marginSidelineBottom, computedStyle, boundingClicentRect)
  setMarginSidelineLeftStyle(sidelineElements.marginSidelineLeft, computedStyle, boundingClicentRect)
}

export const removeSidelineElements = () => {
  for (const element of Object.values(sidelineElements)) {
    try {
      document.body.removeChild(element)
    } catch (error) {
      // ignore
    }
  }
}
