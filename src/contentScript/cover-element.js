// all use the content box to compute top, width, etc.

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

const coverElements = {
  cover: createElement(),
  padding: createElement(),
  border: createElement(),
  margin: createElement(),
}

// Append cover element to body
export function appendCoverElement(target) {
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

export function removeCoverElement() {
  for (const element of Object.values(coverElements)) {
    try {
      document.body.removeChild(element)
    } catch (error) {
      // ignore
    }
  }
}

function setCoverStyle(element, computedStyle, boundingClicentRect) {
  element.style.backgroundColor = coverColor
  element.style.top = getContentTop(computedStyle, boundingClicentRect) + 'px'
  element.style.left = getContentLeft(computedStyle, boundingClicentRect) + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
}

function setPaddingStyle(element, computedStyle, boundingClicentRect) {
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

function setBorderStyle(element, computedStyle, boundingClicentRect) {
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

function setMarginStyle(element, computedStyle, boundingClicentRect) {
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

function createElement() {
  const element = document.createElement('DIV')
  setCommonStyle(element)
  return element
}

function setCommonStyle(element) {
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

function getContentTop(computedStyle, boundingClicentRect) {
  return boundingClicentRect.top + getPaddingTop(computedStyle) + getBorderTopWidth(computedStyle)
}

function getContentRight(computedStyle, boundingClicentRect) {
  return boundingClicentRect.right - getPaddingRight(computedStyle) - getBorderRightWidth(computedStyle)
}

function getContentBottom(computedStyle, boundingClicentRect) {
  return boundingClicentRect.bottom - getPaddingBottom(computedStyle) - getBorderBottomWidth(computedStyle)
}

function getContentLeft(computedStyle, boundingClicentRect) {
  return boundingClicentRect.left + getPaddingLeft(computedStyle) + getBorderLeftWidth(computedStyle)
}

function getContentWidth(computedStyle, boundingClicentRect) {
  return getContentRight(computedStyle, boundingClicentRect) - getContentLeft(computedStyle, boundingClicentRect)
}

function getContentHeight(computedStyle, boundingClicentRect) {
  return getContentBottom(computedStyle, boundingClicentRect) - getContentTop(computedStyle, boundingClicentRect)
}

function getPaddingTop(computedStyle) {
  return parseInt(computedStyle.paddingTop, 10)
}
function getPaddingRight(computedStyle) {
  return parseInt(computedStyle.paddingRight, 10)
}
function getPaddingBottom(computedStyle) {
  return parseInt(computedStyle.paddingBottom, 10)
}
function getPaddingLeft(computedStyle) {
  return parseInt(computedStyle.paddingLeft, 10)
}

function getBorderTopWidth(computedStyle) {
  return parseInt(computedStyle.borderTopWidth, 10)
}
function getBorderRightWidth(computedStyle) {
  return parseInt(computedStyle.borderRightWidth, 10)
}
function getBorderBottomWidth(computedStyle) {
  return parseInt(computedStyle.borderBottomWidth, 10)
}
function getBorderLeftWidth(computedStyle) {
  return parseInt(computedStyle.borderLeftWidth, 10)
}

function getMarginTop(computedStyle) {
  return parseInt(computedStyle.marginTop, 10)
}
function getMarginRight(computedStyle) {
  return parseInt(computedStyle.marginRight, 10)
}
function getMarginBottom(computedStyle) {
  return parseInt(computedStyle.marginBottom, 10)
}
function getMarginLeft(computedStyle) {
  return parseInt(computedStyle.marginLeft, 10)
}
