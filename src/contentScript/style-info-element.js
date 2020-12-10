import configs, { onChange } from '../configs'
import { getContentHeight, getContentWidth, rgbaToHex } from '../util'

// listen show style info
let showStyleInfo = undefined
const getRealCoverSidelineColor = () => {
  showStyleInfo = configs.showStyleInfo ?? true
}
onChange('showStyleInfo', getRealCoverSidelineColor)

const appendChildElementIfNotExist = (element, parentElement) => {
  if (parentElement.contains(element) === false) parentElement.appendChild(element)
}

const setRootPosition = (element, mouseEvent) => {
  const { innerWidth, innerHeight } = window
  const { height, width } = document.getElementById(element.id).getBoundingClientRect()
  const { x, y } = mouseEvent

  const isHeightOutofWindow = innerHeight > height + y
  const isWidthOutofWindow = innerWidth > width + x

  element.style.top = `${isHeightOutofWindow ? y + 10 : y - height - 10}px`
  element.style.left = `${isWidthOutofWindow ? x + 10 : x - width - 10}px`
}

const setHeaderElement = (element, parentElement) => {
  appendChildElementIfNotExist(element, parentElement)
  element.style.width = '100%'
  element.style.fontSize = '14px'
  element.style.display = 'flex'
}

const setBaseInfoElement = (element, parentElement) => {
  appendChildElementIfNotExist(element, parentElement)

  element.style.width = '100%'
}

const setTagNameElement = (element, parentElement, target) => {
  appendChildElementIfNotExist(element, parentElement)

  element.textContent = target.tagName.toLowerCase()
  element.style.color = '#881680'
  element.style.fontWeight = 'bold'
  element.style.float = 'left'
}

const setSelectorsElement = (element, parentElement, target) => {
  appendChildElementIfNotExist(element, parentElement)

  const targetId = target.getAttribute('id')
  const targetClass = target.getAttribute('class')
  const id = targetId ? '#' + targetId : ''
  const classes = targetClass ? '.' + targetClass.split(' ').join('.') : ''
  element.textContent = id + classes
  element.style.color = '#1a1aa6'
  element.style.fontWeight = 'bold'
  element.style.wordBreak = 'break-all'
}

const setSizeElement = (element, parentElement, computedStyle, boundingClicentRect) => {
  appendChildElementIfNotExist(element, parentElement)

  const tragetWidth = parseInt(getContentWidth(computedStyle, boundingClicentRect))
  const tragetHeight = parseInt(getContentHeight(computedStyle, boundingClicentRect))
  element.textContent = `${tragetWidth} x ${tragetHeight}`
  element.style.color = '#777'
  element.style.whiteSpace = 'nowrap'
}

const setContentElement = (elements, computedStyle, boundingClicentRect, target) => {
  setHeaderElement(elements.header, elements.root)
  setBaseInfoElement(elements.baseInfo, elements.header)
  setTagNameElement(elements.tagName, elements.baseInfo, target)
  setSelectorsElement(elements.selectors, elements.baseInfo, target)
  setSizeElement(elements.size, elements.header, computedStyle, boundingClicentRect)

  const DISPLAY_STYLES_KEY = ['color', 'font', 'margin', 'padding']
  DISPLAY_STYLES_KEY.forEach((key, i) => {
    setContentRow(key, computedStyle[key], i, elements.root)
  })
}

const setContentRow = (key, value, index, rootElemnet) => {
  const rootChilds = rootElemnet.childNodes
  // rootChilds[0] is Header
  let rowElement = rootChilds[index + 1]
  // remove if no value
  if (value === '0px' || !value) return rowElement && rootElemnet.removeChild(rowElement)

  if (!rowElement) {
    rowElement = createElement()
    rootElemnet.appendChild(rowElement)
    rowElement.style.display = 'flex'
    rowElement.style.justifyContent = 'space-between'
    rowElement.style.alignItems = 'center'
    rowElement.style.fontSize = '12px'
    rowElement.style.color = '#444'
  }

  const [keyElement, childElement] = rowElement.childNodes
  setContentRowKeyElement(keyElement, rowElement, key)
  setContentRowValueElement(childElement, rowElement, key, value)
}

const setContentRowKeyElement = (element, parentElement, key) => {
  if (!element) {
    element = createElement()
    parentElement.appendChild(element)
    element.style.textTransform = 'capitalize'
  }
  element.textContent = key
}

const setContentRowValueElement = (element, parentElement, key, value) => {
  if (!element) {
    element = createElement()
    parentElement.appendChild(element)
    element.style.width = '60%'
    element.style.overflow = 'hidden'
    element.style.textOverflow = 'ellipsis'
    element.style.whiteSpace = 'nowrap'
    element.style.textAlign = 'right'
  }

  // set valueElement content
  if (key === 'color') {
    let [colorElement, valueElement] = element.childNodes
    if (!colorElement) {
      colorElement = document.createElement('div')
      element.appendChild(colorElement)
      colorElement.style.width = '12px'
      colorElement.style.height = '12px'
      colorElement.style.display = 'inline-block'
      colorElement.style.margin = '-1px 4px -2px 0'
      colorElement.style.border = '1px solid #555'
    }
    colorElement.style.backgroundColor = value

    if (!valueElement) {
      valueElement = document.createElement('span')
      element.appendChild(valueElement)
    }
    valueElement.textContent = rgbaToHex(value)
  } else {
    let [valueElement] = element.childNodes
    if (!valueElement) {
      valueElement = document.createElement('span')
      element.appendChild(valueElement)
    }
    valueElement.textContent = value
  }
}

const setRootElementStyle = element => {
  element.style.position = 'fixed'
  element.style.boxShadow = '0px 0px 6px -1px #969696'
  element.style.borderRadius = '4px'
  element.style.backgroundColor = '#fefefe'
  element.style.padding = '8px'
  element.style.zIndex = '10000'
  element.style.maxWidth = '100vw'
  element.style.width = '300px'
}

const setElementAttributes = (element, id) => {
  element.dataset['inspectElement'] = 'inspectElement'
  if (id) element.id = `inspect-element-style-info-${id}`
  element.style.pointerEvents = 'none'
}

const createElement = id => {
  const element = document.createElement('DIV')
  setElementAttributes(element, id)
  if (id === 'root') setRootElementStyle(element)
  return element
}

const styleInfoChildElements = {
  root: createElement('root'),
  header: createElement('header'),
  baseInfo: createElement(),
  tagName: createElement('tag'),
  selectors: createElement('selector'),
  size: createElement('size'),
}

export const appendStyleInfoEelment = (computedStyle, boundingClicentRect, mouseEvent, target) => {
  if (!showStyleInfo) return
  appendChildElementIfNotExist(styleInfoChildElements.root, document.body)
  setRootPosition(styleInfoChildElements.root, mouseEvent)
  setContentElement(styleInfoChildElements, computedStyle, boundingClicentRect, target)
}

export const removeStyleInfoEelment = () => {
  try {
    document.body.removeChild(styleInfoChildElements.root)
  } catch (error) {
    // ignore
  }
}
