import configs, { onChange } from '../configs'
import { getContentHeight, getContentWidth } from '../util'

// listen show style info
let showStyleInfo = undefined
const getRealCoverSidelineColor = () => {
  showStyleInfo = configs.showStyleInfo ?? true
}
onChange('showStyleInfo', getRealCoverSidelineColor)

const setStyleInfoRootStyles = (element, mouseEvent) => {
  const { innerWidth, innerHeight } = window
  const { height, width } = document.getElementById(element.id).getBoundingClientRect()
  const { x, y } = mouseEvent
  const isHeightOutofWindow = innerHeight > height + y
  const isWidthOutofWindow = innerWidth > width + x
  element.style.top = `${isHeightOutofWindow ? y + 10 : y - height - 10}px`
  element.style.left = `${isWidthOutofWindow ? x + 10 : x - width - 10}px`
}

const setStyleInfoElementHeader = (element, parentElement) => {
  if (!parentElement.contains(element)) parentElement.appendChild(element)
  element.style.width = '100%'
  element.style.fontSize = '14px'
  element.style.display = 'flex'
}

const setStyleInfoElementHeaderLeft = (element, parentElement) => {
  if (!parentElement.contains(element)) parentElement.appendChild(element)
  element.style.width = '100%'
}

const setStyleInfoElementTagName = (element, target, parentElement) => {
  if (!parentElement.contains(element)) parentElement.appendChild(element)
  element.textContent = target.tagName.toLowerCase()
  element.style.color = '#881680'
  element.style.fontWeight = 'bold'
  element.style.float = 'left'
}

const setStyleInfoElementSelectors = (element, target, parentElement) => {
  if (!parentElement.contains(element)) parentElement.appendChild(element)
  const targetId = target.getAttribute('id')
  const targetClass = target.getAttribute('class')
  const id = targetId ? '#' + targetId : ''
  const classes = targetClass ? '.' + targetClass.split(' ').join('.') : ''
  element.textContent = id + classes
  element.style.color = '#1a1aa6'
  element.style.fontWeight = 'bold'
  element.style.wordBreak = 'break-all'
}

const setStyleInfoElementSize = (element, parentElement, computedStyle, boundingClicentRect) => {
  if (!parentElement.contains(element)) parentElement.appendChild(element)
  const tragetWidth = parseInt(getContentWidth(computedStyle, boundingClicentRect))
  const tragetHeight = parseInt(getContentHeight(computedStyle, boundingClicentRect))
  element.textContent = `${tragetWidth} x ${tragetHeight}`
  element.style.color = '#777'
  element.style.whiteSpace = 'nowrap'
}

const setCombineStyleRow = (key, value, parentElement) => {
  const rowElement = styleInfoChildElements.content[key]?.rootElement || createElement()
  rowElement.style.display = 'flex'
  rowElement.style.justifyContent = 'space-between'
  rowElement.style.alignItems = 'center'
  rowElement.style.fontSize = '14px'

  const keyElement = styleInfoChildElements.content[key]?.keyElement || createElement()
  keyElement.textContent = key
  keyElement.style.textTransform = 'capitalize'

  const valueElement = styleInfoChildElements.content[key]?.valueElement || createElement()
  valueElement.textContent = value
  valueElement.style.width = '60%'
  valueElement.style.overflow = 'hidden'
  valueElement.style.textOverflow = 'ellipsis'
  valueElement.style.whiteSpace = 'nowrap'
  valueElement.style.textAlign = 'right'

  // initial styleInfoChildElements.content
  if (!styleInfoChildElements.content[key]) {
    styleInfoChildElements.content[key] = {}
    styleInfoChildElements.content[key].rootElement = rowElement
    styleInfoChildElements.content[key].keyElement = keyElement
    styleInfoChildElements.content[key].valueElement = valueElement
  }

  if (!parentElement.contains(styleInfoChildElements.content[key].rootElement))
    parentElement.appendChild(styleInfoChildElements.content[key].rootElement)
  if (!styleInfoChildElements.content[key].rootElement.contains(styleInfoChildElements.content[key].keyElement))
    styleInfoChildElements.content[key].rootElement.appendChild(styleInfoChildElements.content[key].keyElement)
  if (!styleInfoChildElements.content[key].rootElement.contains(styleInfoChildElements.content[key].valueElement))
    styleInfoChildElements.content[key].rootElement.appendChild(styleInfoChildElements.content[key].valueElement)
}

const setStyleInfoRootStyle = element => {
  element.style.position = 'fixed'
  element.style.boxShadow = '0px 0px 6px -1px #969696'
  element.style.borderRadius = '4px'
  element.style.backgroundColor = '#fefefe'
  element.style.padding = '8px'
  element.style.zIndex = '100000'
  element.style.width = '300px'
}

const setStyleInfoStyle = (element, id) => {
  element.dataset['inspectElement'] = 'inspectElement'
  if (id) element.id = `inspect-element-style-info-${id}`
  element.style.pointerEvents = 'none'
}

const createElement = id => {
  const element = document.createElement('DIV')
  setStyleInfoStyle(element, id)
  return element
}

const createRootElement = id => {
  const element = document.createElement('DIV')
  setStyleInfoStyle(element, id)
  setStyleInfoRootStyle(element)
  return element
}

const styleInfoChildElements = {
  root: createRootElement('root'),
  header: createElement('header'),
  headerLeft: createElement(),
  tagName: createElement('tag'),
  selectors: createElement('selector'),
  size: createElement('size'),
  content: {},
}

export const appendStyleInfoEelment = (computedStyle, boundingClicentRect, mouseEvent, target) => {
  if (!showStyleInfo) return
  if (!document.body.contains(styleInfoChildElements.root)) document.body.appendChild(styleInfoChildElements.root)
  setStyleInfoRootStyles(styleInfoChildElements.root, mouseEvent)
  setStyleInfoElementHeader(styleInfoChildElements.header, styleInfoChildElements.root)
  setStyleInfoElementHeaderLeft(styleInfoChildElements.headerLeft, styleInfoChildElements.header)
  setStyleInfoElementTagName(styleInfoChildElements.tagName, target, styleInfoChildElements.headerLeft)
  setStyleInfoElementSelectors(styleInfoChildElements.selectors, target, styleInfoChildElements.headerLeft)
  setStyleInfoElementSize(
    styleInfoChildElements.size,
    styleInfoChildElements.header,
    computedStyle,
    boundingClicentRect,
  )

  const allowStyles = ['color', 'font', 'margin', 'padding']
  for (const styleKey of allowStyles) {
    setCombineStyleRow(styleKey, computedStyle[styleKey], styleInfoChildElements.root)
  }
}

export const removeStyleInfoEelment = () => {
  try {
    document.body.removeChild(styleInfoChildElements.root)
  } catch (error) {
    // ignore
  }
}
