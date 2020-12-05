import configs from '../configs'
import {
  getContentTopPosition,
  getContentLeftPosition,
  getContentWidth,
  getContentHeight,
  getPaddingTop,
  getPaddingRight,
  getPaddingBottom,
  getPaddingLeft,
  getBorderTopWidth,
  getBorderRightWidth,
  getBorderBottomWidth,
  getBorderLeftWidth,
  getMarginTop,
  getMarginRight,
  getMarginBottom,
  getMarginLeft,
} from '../util'

// all use the content box to compute top, width, etc.

const setCoverStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.backgroundColor = configs.coverColor
  element.style.top = getContentTopPosition(computedStyle, boundingClicentRect) + 'px'
  element.style.left = getContentLeftPosition(computedStyle, boundingClicentRect) + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
}

const setPaddingStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getContentTopPosition(computedStyle, boundingClicentRect) - getPaddingTop(computedStyle) + 'px'
  element.style.left = getContentLeftPosition(computedStyle, boundingClicentRect) - getPaddingLeft(computedStyle) + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderColor = configs.paddingColor
  element.style.borderTopWidth = getPaddingTop(computedStyle) + 'px'
  element.style.borderRightWidth = getPaddingRight(computedStyle) + 'px'
  element.style.borderBottomWidth = getPaddingBottom(computedStyle) + 'px'
  element.style.borderLeftWidth = getPaddingLeft(computedStyle) + 'px'
}

const setBorderStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top =
    getContentTopPosition(computedStyle, boundingClicentRect) -
    getPaddingTop(computedStyle) -
    getBorderTopWidth(computedStyle) +
    'px'
  element.style.left =
    getContentLeftPosition(computedStyle, boundingClicentRect) -
    getPaddingLeft(computedStyle) -
    getBorderLeftWidth(computedStyle) +
    'px'
  element.style.height =
    getContentHeight(computedStyle, boundingClicentRect) +
    getPaddingTop(computedStyle) +
    getPaddingBottom(computedStyle) +
    'px'
  element.style.width =
    getContentWidth(computedStyle, boundingClicentRect) +
    getPaddingRight(computedStyle) +
    getPaddingLeft(computedStyle) +
    'px'
  element.style.borderColor = configs.borderColor
  element.style.borderTopWidth = getBorderTopWidth(computedStyle) + 'px'
  element.style.borderRightWidth = getBorderRightWidth(computedStyle) + 'px'
  element.style.borderBottomWidth = getBorderBottomWidth(computedStyle) + 'px'
  element.style.borderLeftWidth = getBorderLeftWidth(computedStyle) + 'px'
}

const setMarginStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top =
    getContentTopPosition(computedStyle, boundingClicentRect) -
    getPaddingTop(computedStyle) -
    getBorderTopWidth(computedStyle) -
    getMarginTop(computedStyle) +
    'px'
  element.style.left =
    getContentLeftPosition(computedStyle, boundingClicentRect) -
    getPaddingLeft(computedStyle) -
    getBorderLeftWidth(computedStyle) -
    getMarginLeft(computedStyle) +
    'px'
  element.style.height =
    getContentHeight(computedStyle, boundingClicentRect) +
    getPaddingTop(computedStyle) +
    getPaddingBottom(computedStyle) +
    getBorderTopWidth(computedStyle) +
    getBorderBottomWidth(computedStyle) +
    'px'
  element.style.width =
    getContentWidth(computedStyle, boundingClicentRect) +
    getPaddingRight(computedStyle) +
    getPaddingLeft(computedStyle) +
    getBorderRightWidth(computedStyle) +
    getBorderLeftWidth(computedStyle) +
    'px'
  element.style.borderColor = configs.marginColor
  element.style.borderTopWidth = getMarginTop(computedStyle) + 'px'
  element.style.borderRightWidth = getMarginRight(computedStyle) + 'px'
  element.style.borderBottomWidth = getMarginBottom(computedStyle) + 'px'
  element.style.borderLeftWidth = getMarginLeft(computedStyle) + 'px'
}

const createElement = id => {
  const element = document.createElement('DIV')
  setCommonStyle(element, id)
  return element
}

const setCommonStyle = (element, id) => {
  element.dataset['inspectElement'] = 'inspectElement'
  element.id = `inspect-element-${id}`
  element.style.position = 'fixed'
  element.style.zIndex = 9999
  element.style.pointerEvents = 'none'
  element.style.backgroundColor = 'transparent'
  element.style.borderStyle = 'solid'
  element.style.borderWidth = '0px'
  element.style.borderColor = 'transparent'
  element.style.boxSizing = 'content-box'
}

const coverElements = {
  cover: createElement('cover'),
  padding: createElement('padding'),
  border: createElement('border'),
  margin: createElement('margin'),
}

export const appendCoverElements = (computedStyle, boundingClicentRect) => {
  for (const element of Object.values(coverElements))
    if (document.body.contains(element) === false) document.body.appendChild(element)

  setCoverStyle(coverElements.cover, computedStyle, boundingClicentRect)
  setPaddingStyle(coverElements.padding, computedStyle, boundingClicentRect)
  setBorderStyle(coverElements.border, computedStyle, boundingClicentRect)
  setMarginStyle(coverElements.margin, computedStyle, boundingClicentRect)
}

export const removeCoverElements = () => {
  for (const element of Object.values(coverElements)) {
    try {
      document.body.removeChild(element)
    } catch (error) {
      // ignore
    }
  }
}
