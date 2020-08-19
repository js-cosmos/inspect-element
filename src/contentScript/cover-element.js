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
  element.style.left = boundingClicentRect.left + 'px'
  element.style.top = boundingClicentRect.top + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderRightWidth = getBorderRightWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderBottomWidth = getBorderBottomWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderLeftWidth = getBorderLeftWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderTopWidth = getBorderTopWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.paddingRight = getPaddingRight(computedStyle, boundingClicentRect) + 'px'
  element.style.paddingBottom = getPaddingBottom(computedStyle, boundingClicentRect) + 'px'
  element.style.paddingLeft = getPaddingLeft(computedStyle, boundingClicentRect) + 'px'
  element.style.paddingTop = getPaddingTop(computedStyle, boundingClicentRect) + 'px'
}

function setPaddingStyle(element, computedStyle, boundingClicentRect) {
  element.style.borderColor = paddingColor
  element.style.left = boundingClicentRect.left + 'px'
  element.style.top = boundingClicentRect.top + 'px'
  element.style.height = getContentHeight(computedStyle, boundingClicentRect) + 'px'
  element.style.width = getContentWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderRightWidth = getPaddingRight(computedStyle, boundingClicentRect) + 'px'
  element.style.borderBottomWidth = getPaddingBottom(computedStyle, boundingClicentRect) + 'px'
  element.style.borderLeftWidth = getPaddingLeft(computedStyle, boundingClicentRect) + 'px'
  element.style.borderTopWidth = getPaddingTop(computedStyle, boundingClicentRect) + 'px'
}

function setBorderStyle(element, computedStyle, boundingClicentRect) {
  element.style.borderColor = borderColor
  element.style.left = boundingClicentRect.left + 'px'
  element.style.top = boundingClicentRect.top + 'px'
  element.style.height =
    getContentHeight(computedStyle, boundingClicentRect) +
    getPaddingBottom(computedStyle, boundingClicentRect) +
    getPaddingTop(computedStyle, boundingClicentRect) +
    'px'
  element.style.width =
    getContentWidth(computedStyle, boundingClicentRect) +
    getPaddingRight(computedStyle, boundingClicentRect) +
    getPaddingLeft(computedStyle, boundingClicentRect) +
    'px'
  element.style.borderRightWidth = getBorderRightWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderBottomWidth = getBorderBottomWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderLeftWidth = getBorderLeftWidth(computedStyle, boundingClicentRect) + 'px'
  element.style.borderTopWidth = getBorderTopWidth(computedStyle, boundingClicentRect) + 'px'
}

function setMarginStyle(element, computedStyle, boundingClicentRect) {
  element.style.borderColor = marginColor
  element.style.left = boundingClicentRect.left - getMarginLeft(computedStyle, boundingClicentRect) + 'px'
  element.style.top = boundingClicentRect.top - getMarginTop(computedStyle, boundingClicentRect) + 'px'
  element.style.height =
    getContentHeight(computedStyle, boundingClicentRect) +
    getPaddingBottom(computedStyle, boundingClicentRect) +
    getPaddingTop(computedStyle, boundingClicentRect) +
    getBorderBottomWidth(computedStyle, boundingClicentRect) +
    getBorderTopWidth(computedStyle, boundingClicentRect) +
    'px'
  element.style.width =
    getContentWidth(computedStyle, boundingClicentRect) +
    getPaddingRight(computedStyle, boundingClicentRect) +
    getPaddingLeft(computedStyle, boundingClicentRect) +
    getBorderRightWidth(computedStyle, boundingClicentRect) +
    getBorderLeftWidth(computedStyle, boundingClicentRect) +
    'px'
  element.style.borderRightWidth = getMarginRight(computedStyle, boundingClicentRect) + 'px'
  element.style.borderBottomWidth = getMarginBottom(computedStyle, boundingClicentRect) + 'px'
  element.style.borderLeftWidth = getMarginLeft(computedStyle, boundingClicentRect) + 'px'
  element.style.borderTopWidth = getMarginTop(computedStyle, boundingClicentRect) + 'px'
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

function getContentWidth(computedStyle, boundingClicentRect) {
  if (computedStyle.boxSizing === 'border-box') {
    // width/height + padding + border-width if box-sizing: content-box has been set on it
    return (
      boundingClicentRect.right -
      boundingClicentRect.left -
      parseInt(computedStyle.paddingLeft, 10) -
      parseInt(computedStyle.paddingRight, 10) -
      parseInt(computedStyle.borderLeftWidth, 10) -
      parseInt(computedStyle.borderRightWidth, 10)
    )
  } else {
    // width/height only if box-sizing: border-box has been set on it
    return boundingClicentRect.right - boundingClicentRect.left
  }
}

function getContentHeight(computedStyle, boundingClicentRect) {
  if (computedStyle.boxSizing === 'border-box') {
    // width/height + padding + border-width if box-sizing: content-box has been set on it
    return (
      boundingClicentRect.bottom -
      boundingClicentRect.top -
      parseInt(computedStyle.paddingTop, 10) -
      parseInt(computedStyle.paddingBottom, 10) -
      parseInt(computedStyle.borderTopWidth, 10) -
      parseInt(computedStyle.borderBottomWidth, 10)
    )
  } else {
    // width/height only if box-sizing: border-box has been set on it
    return boundingClicentRect.bottom - boundingClicentRect.top
  }
}

function getPaddingRight(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.paddingRight, 10)
}
function getPaddingBottom(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.paddingBottom, 10)
}
function getPaddingLeft(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.paddingLeft, 10)
}
function getPaddingTop(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.paddingTop, 10)
}

function getBorderRightWidth(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.borderRightWidth, 10)
}
function getBorderBottomWidth(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.borderBottomWidth, 10)
}
function getBorderLeftWidth(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.borderLeftWidth, 10)
}
function getBorderTopWidth(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.borderTopWidth, 10)
}

function getMarginRight(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.marginRight, 10)
}
function getMarginBottom(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.marginBottom, 10)
}
function getMarginLeft(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.marginLeft, 10)
}
function getMarginTop(computedStyle, boundingClicentRect) {
  return parseInt(computedStyle.marginTop, 10)
}
