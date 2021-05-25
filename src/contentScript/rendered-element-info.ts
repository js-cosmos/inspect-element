import configs, { onChange } from '../configs'
import { getContentWidth, getContentHeight } from '../util'

let showRenderedElementInfo: boolean
const getShowRenderedElementInfo = () => {
  showRenderedElementInfo = configs.showRenderedElementInfo
}
getShowRenderedElementInfo()
onChange('showRenderedElementInfo', getShowRenderedElementInfo)

const removeOpacity = (color: string) => {
  return color.slice(0, 7) + 'ee'
}

// listen color change event
let coverColor: string
const updateCoverColor = () => {
  coverColor = removeOpacity(configs.coverColor)
}
updateCoverColor()
onChange('coverColor', updateCoverColor)

let paddingColor: string
const updatePaddingColor = () => {
  paddingColor = removeOpacity(configs.paddingColor)
}
updatePaddingColor()
onChange('paddingColor', updatePaddingColor)

let borderColor: string
const updateBorderColor = () => {
  borderColor = removeOpacity(configs.borderColor)
}
updateBorderColor()
onChange('borderColor', updateBorderColor)

let marginColor: string
const updateMarginColor = () => {
  marginColor = removeOpacity(configs.marginColor)
}
updateMarginColor()
onChange('marginColor', updateMarginColor)

const normalizeSize = (size: string) => {
  size = parseFloat(size)
    .toFixed(3)
    .replace(/(.*\..*?)0+/g, '$1')
    .replace(/\.$/, '')
  return size === '0' ? '-' : size
}

const normalizeContentSize = (size: number) => {
  return size
    .toFixed(3)
    .padStart(10, ' ')
    .replace(/\s/g, '&nbsp;')
    .replace(/(0+)$/g, s => '&nbsp;'.repeat(s.length))
    .replace('.&nbsp;', '&nbsp;&nbsp;')
}

// cover
const updateCover = (element: HTMLElement, computedStyle: CSSStyleDeclaration, boundingClicentRect: DOMRect) => {
  element.innerHTML =
    `w ${normalizeContentSize(getContentWidth(computedStyle, boundingClicentRect))}` +
    '<br>' +
    `h ${normalizeContentSize(getContentHeight(computedStyle, boundingClicentRect))}`
  element.style.backgroundColor = coverColor
}

// padding
const updatePaddingTop = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.paddingTop)}</p>`
  element.style.backgroundColor = paddingColor
}

const updatePaddingRight = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.paddingRight)}</p>`
  element.style.backgroundColor = paddingColor
}

const updatePaddingBottom = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.paddingBottom)}</p>`
  element.style.backgroundColor = paddingColor
}

const updatePaddingLeft = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.paddingLeft)}</p>`
  element.style.backgroundColor = paddingColor
}

// border
const updateBorderTop = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.borderTopWidth)}</p>`
  element.style.backgroundColor = borderColor
}

const updateBorderRight = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.borderRightWidth)}</p>`
  element.style.backgroundColor = borderColor
}

const updateBorderBottom = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.borderBottomWidth)}</p>`
  element.style.backgroundColor = borderColor
}

const updateBorderLeft = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.borderLeftWidth)}</p>`
  element.style.backgroundColor = borderColor
}

// margin
const updateMarginTop = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.marginTop)}</p>`
  element.style.backgroundColor = marginColor
}

const updateMarginRight = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.marginRight)}</p>`
  element.style.backgroundColor = marginColor
}

const updateMarginBottom = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.marginBottom)}</p>`
  element.style.backgroundColor = marginColor
}

const updateMarginLeft = (element: HTMLElement, computedStyle: CSSStyleDeclaration) => {
  element.innerHTML = `<p style="margin-bottom: 0;">${normalizeSize(computedStyle.marginLeft)}</p>`
  element.style.backgroundColor = marginColor
}

const templatePaddingRe = /^(\w+)Padding\d+$/
const updateTemplatePadding = () => {
  for (const key in elements) {
    const [, type] = key.match(templatePaddingRe) ?? []
    if (type === 'padding') (elements as any)[key].style.backgroundColor = paddingColor
    if (type === 'border') (elements as any)[key].style.backgroundColor = borderColor
    if (type === 'margin') (elements as any)[key].style.backgroundColor = marginColor
  }
}

const createElement = (id: string) => {
  const element = document.createElement('DIV')
  element.dataset['inspectElement'] = 'inspectElement'
  element.id = `inspect-element-rendered-element-info-${id}`
  element.style.gridArea = id
  element.style.zIndex = '9997'
  element.style.display = 'flex'
  element.style.height = '100%'
  element.style.alignItems = 'center'
  element.style.justifyContent = 'center'
  element.style.paddingLeft = '4px'
  element.style.paddingRight = '4px'
  element.style.pointerEvents = 'none'
  return element
}

const wrapper = createElement('wrapper')
wrapper.style.position = 'fixed'
wrapper.style.right = '0'
wrapper.style.bottom = '0'
wrapper.style.display = 'grid'
wrapper.style.fontFamily = 'monospace'
wrapper.style.fontSize = '12px'
wrapper.style.paddingLeft = '0'
wrapper.style.paddingRight = '0'
wrapper.style.gridTemplateAreas = `
"margin-padding1  margin-padding2  margin-padding3  margin-top     margin-padding4  margin-padding5  margin-padding6 "
"margin-padding7  border-padding1  border-padding2  border-top     border-padding3  border-padding4  margin-padding8 "
"margin-padding9  border-padding5  padding-padding1 padding-top    padding-padding2 border-padding6  margin-padding10"
"margin-left      border-left      padding-left     cover          padding-right    border-right     margin-right    "
"margin-left      border-left      padding-left     cover          padding-right    border-right     margin-right    "
"margin-left      border-left      padding-left     cover          padding-right    border-right     margin-right    "
"margin-padding11 border-padding7  padding-padding3 padding-bottom padding-padding4 border-padding8  margin-padding12"
"margin-padding13 border-padding9  border-padding10 border-bottom  border-padding11 border-padding12 margin-padding14"
"margin-padding15 margin-padding16 margin-padding17 margin-bottom  margin-padding18 margin-padding19 margin-padding20"
`
wrapper.style.textAlign = 'center'
wrapper.style.transition = 'transform .4s'

const updatePosition = (event: MouseEvent) => {
  if (
    event.clientX > document.documentElement.clientWidth - 300 &&
    event.clientY > document.documentElement.clientHeight - 300
  ) {
    wrapper.style.transform = 'translateY(-300px)'
  } else wrapper.style.transform = 'translateY(0)'
}

const elements = {
  cover: createElement('cover'),

  paddingPadding: createElement('padding-padding'),
  paddingTop: createElement('padding-top'),
  paddingRight: createElement('padding-right'),
  paddingBottom: createElement('padding-bottom'),
  paddingLeft: createElement('padding-left'),

  borderPadding: createElement('border-padding'),
  borderTop: createElement('border-top'),
  borderRight: createElement('border-right'),
  borderBottom: createElement('border-bottom'),
  borderLeft: createElement('border-left'),

  marginPadding: createElement('margin-padding'),
  marginTop: createElement('margin-top'),
  marginRight: createElement('margin-right'),
  marginBottom: createElement('margin-bottom'),
  marginLeft: createElement('margin-left'),

  paddingPadding1: createElement('padding-padding1'),
  paddingPadding2: createElement('padding-padding2'),
  paddingPadding3: createElement('padding-padding3'),
  paddingPadding4: createElement('padding-padding4'),
  borderPadding1: createElement('border-padding1'),
  borderPadding2: createElement('border-padding2'),
  borderPadding3: createElement('border-padding3'),
  borderPadding4: createElement('border-padding4'),
  borderPadding5: createElement('border-padding5'),
  borderPadding6: createElement('border-padding6'),
  borderPadding7: createElement('border-padding7'),
  borderPadding8: createElement('border-padding8'),
  borderPadding9: createElement('border-padding9'),
  borderPadding10: createElement('border-padding10'),
  borderPadding11: createElement('border-padding11'),
  borderPadding12: createElement('border-padding12'),
  marginPadding1: createElement('margin-padding1'),
  marginPadding2: createElement('margin-padding2'),
  marginPadding3: createElement('margin-padding3'),
  marginPadding4: createElement('margin-padding4'),
  marginPadding5: createElement('margin-padding5'),
  marginPadding6: createElement('margin-padding6'),
  marginPadding7: createElement('margin-padding7'),
  marginPadding8: createElement('margin-padding8'),
  marginPadding9: createElement('margin-padding9'),
  marginPadding10: createElement('margin-padding10'),
  marginPadding11: createElement('margin-padding11'),
  marginPadding12: createElement('margin-padding12'),
  marginPadding13: createElement('margin-padding13'),
  marginPadding14: createElement('margin-padding14'),
  marginPadding15: createElement('margin-padding15'),
  marginPadding16: createElement('margin-padding16'),
  marginPadding17: createElement('margin-padding17'),
  marginPadding18: createElement('margin-padding18'),
  marginPadding19: createElement('margin-padding19'),
  marginPadding20: createElement('margin-padding20'),
}

for (const element of Object.values(elements)) wrapper.appendChild(element)

export const appendRenderedElementInfo = (
  computedStyle: CSSStyleDeclaration,
  boundingClicentRect: DOMRect,
  event: MouseEvent,
) => {
  if (showRenderedElementInfo === false) return
  if (document.body.contains(wrapper) === false) document.body.appendChild(wrapper)

  updatePosition(event)

  updateCover(elements.cover, computedStyle, boundingClicentRect)

  updateTemplatePadding()

  updatePaddingTop(elements.paddingTop, computedStyle)
  updatePaddingRight(elements.paddingRight, computedStyle)
  updatePaddingBottom(elements.paddingBottom, computedStyle)
  updatePaddingLeft(elements.paddingLeft, computedStyle)

  updateBorderTop(elements.borderTop, computedStyle)
  updateBorderRight(elements.borderRight, computedStyle)
  updateBorderBottom(elements.borderBottom, computedStyle)
  updateBorderLeft(elements.borderLeft, computedStyle)

  updateMarginTop(elements.marginTop, computedStyle)
  updateMarginRight(elements.marginRight, computedStyle)
  updateMarginBottom(elements.marginBottom, computedStyle)
  updateMarginLeft(elements.marginLeft, computedStyle)
}

export const removeRenderedElementInfo = () => {
  try {
    document.body.removeChild(wrapper)
  } catch {}
}
