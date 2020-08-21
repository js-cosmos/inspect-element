// all use the content box to compute top, width, etc.

const setCoverStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.backgroundColor = coverColor
  element.style.top = getContentTop(computedStyle, boundingClicentRect) + 'px'
  element.style.left = getContentLeft(computedStyle, boundingClicentRect) + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
}

const setPaddingStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top = getContentTop(computedStyle, boundingClicentRect) - getPaddingTop(computedStyle) + 'px'
  element.style.left = getContentLeft(computedStyle, boundingClicentRect) - getPaddingLeft(computedStyle) + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderColor = paddingColor
  element.style.borderTopWidth = getPaddingTop(computedStyle) + 'px'
  element.style.borderRightWidth = getPaddingRight(computedStyle) + 'px'
  element.style.borderBottomWidth = getPaddingBottom(computedStyle) + 'px'
  element.style.borderLeftWidth = getPaddingLeft(computedStyle) + 'px'
}

const setBorderStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top =
    getContentTop(computedStyle, boundingClicentRect) -
    getPaddingTop(computedStyle) -
    getBorderTopWidth(computedStyle) +
    'px'
  element.style.left =
    getContentLeft(computedStyle, boundingClicentRect) -
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
  element.style.borderColor = borderColor
  element.style.borderTopWidth = getBorderTopWidth(computedStyle) + 'px'
  element.style.borderRightWidth = getBorderRightWidth(computedStyle) + 'px'
  element.style.borderBottomWidth = getBorderBottomWidth(computedStyle) + 'px'
  element.style.borderLeftWidth = getBorderLeftWidth(computedStyle) + 'px'
}

const setMarginStyle = (element, computedStyle, boundingClicentRect) => {
  element.style.top =
    getContentTop(computedStyle, boundingClicentRect) -
    getPaddingTop(computedStyle) -
    getBorderTopWidth(computedStyle) -
    getMarginTop(computedStyle) +
    'px'
  element.style.left =
    getContentLeft(computedStyle, boundingClicentRect) -
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
  element.style.borderColor = marginColor
  element.style.borderTopWidth = getMarginTop(computedStyle) + 'px'
  element.style.borderRightWidth = getMarginRight(computedStyle) + 'px'
  element.style.borderBottomWidth = getMarginBottom(computedStyle) + 'px'
  element.style.borderLeftWidth = getMarginLeft(computedStyle) + 'px'
}

const createElement = () => {
  const element = document.createElement('DIV')
  setCommonStyle(element)
  return element
}

const setCommonStyle = element => {
  element.dataset['inspectElement'] = 'inspectElement'
  element.style.position = 'fixed'
  element.style.zIndex = 9999
  element.style.pointerEvents = 'none'
  element.style.backgroundColor = 'transparent'
  element.style.borderStyle = 'solid'
  element.style.borderWidth = '0px'
  element.style.borderColor = 'transparent'
  element.style.boxSizing = 'content-box'
}

const getContentTop = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.top + getPaddingTop(computedStyle) + getBorderTopWidth(computedStyle)
}

const getContentRight = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.right - getPaddingRight(computedStyle) - getBorderRightWidth(computedStyle)
}

const getContentBottom = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.bottom - getPaddingBottom(computedStyle) - getBorderBottomWidth(computedStyle)
}

const getContentLeft = (computedStyle, boundingClicentRect) => {
  return boundingClicentRect.left + getPaddingLeft(computedStyle) + getBorderLeftWidth(computedStyle)
}

const getContentWidth = (computedStyle, boundingClicentRect) => {
  return getContentRight(computedStyle, boundingClicentRect) - getContentLeft(computedStyle, boundingClicentRect)
}

const getContentHeight = (computedStyle, boundingClicentRect) => {
  return getContentBottom(computedStyle, boundingClicentRect) - getContentTop(computedStyle, boundingClicentRect)
}

const getPaddingTop = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingTop, 10), 0)
}
const getPaddingRight = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingRight, 10), 0)
}
const getPaddingBottom = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingBottom, 10), 0)
}
const getPaddingLeft = computedStyle => {
  return Math.max(parseInt(computedStyle.paddingLeft, 10), 0)
}

const getBorderTopWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderTopWidth, 10), 0)
}
const getBorderRightWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderRightWidth, 10), 0)
}
const getBorderBottomWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderBottomWidth, 10), 0)
}
const getBorderLeftWidth = computedStyle => {
  return Math.max(parseInt(computedStyle.borderLeftWidth, 10), 0)
}

const getMarginTop = computedStyle => {
  return Math.max(parseInt(computedStyle.marginTop, 10), 0)
}
const getMarginRight = computedStyle => {
  return Math.max(parseInt(computedStyle.marginRight, 10), 0)
}
const getMarginBottom = computedStyle => {
  return Math.max(parseInt(computedStyle.marginBottom, 10), 0)
}
const getMarginLeft = computedStyle => {
  return Math.max(parseInt(computedStyle.marginLeft, 10), 0)
}

const coverElements = {
  cover: createElement(),
  padding: createElement(),
  border: createElement(),
  margin: createElement(),
}

let coverColor = 'blue'
let paddingColor = 'green'
let borderColor = 'yellow'
let marginColor = 'orange'

chrome.storage.sync.get(
  ['coverColor', 'paddingColor', 'borderColor', 'marginColor'],
  ({ coverColor: _coverColor, paddingColor: _paddingColor, borderColor: _borderColor, marginColor: _marginColor }) => {
    coverColor = _coverColor
    paddingColor = _paddingColor
    borderColor = _borderColor
    marginColor = _marginColor
  },
)

chrome.storage.sync.onChanged.addListener(changes => {
  if (changes.coverColor) coverColor = changes.coverColor.newValue
  if (changes.paddingColor) paddingColor = changes.paddingColor.newValue
  if (changes.borderColor) borderColor = changes.borderColor.newValue
  if (changes.marginColor) marginColor = changes.marginColor.newValue
})

// Append cover element to body
export const appendCoverElement = target => {
  // throw Error('Not yet implemented.')

  for (const element of Object.values(coverElements))
    if (document.body.contains(element) === false) document.body.appendChild(element)

  const computedStyle = window.getComputedStyle(target)
  const boundingClicentRect = target.getBoundingClientRect()

  setCoverStyle(coverElements.cover, computedStyle, boundingClicentRect)
  setPaddingStyle(coverElements.padding, computedStyle, boundingClicentRect)
  setBorderStyle(coverElements.border, computedStyle, boundingClicentRect)
  setMarginStyle(coverElements.margin, computedStyle, boundingClicentRect)
}

export const removeCoverElement = () => {
  for (const element of Object.values(coverElements)) {
    try {
      document.body.removeChild(element)
    } catch (error) {
      // ignore
    }
  }
}
