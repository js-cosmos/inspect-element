import configs from '../configs'

// Find and return the hovered element based on the inspect mode.
export function findHoveredElement(event: MouseEvent) {
  if (configs.mode === 'content') return event.target

  const element = isInElement(event, event.target as Element)
  if (element) return element

  return event.target
}

const isInElement = (event: MouseEvent, element: Element): Element | null => {
  const children = element.children
  if (children.length) {
    for (const child of Array.from(children)) {
      const element = isInElement(event, child)
      if (element) return element
    }
  }

  const computedStyle = getComputedStyle(element)
  const boundingClientRect = element.getBoundingClientRect()

  const boundingMarginRect = getBoundingMarginRect(computedStyle, boundingClientRect)
  const inMarginRect = isInRect(event, boundingMarginRect)
  if (inMarginRect === false) return null

  const boundingBorderRect = getBoundingBorderRect(computedStyle, boundingClientRect)
  const inBorderRect = isInRect(event, boundingBorderRect)
  if (inBorderRect === false) return element

  // not found
  return null
}

const isInRect = (event: MouseEvent, rect: DOMRect) => {
  const clientY = event.clientY
  const clientX = event.clientX
  return clientY > rect.top && clientX < rect.right && clientY < rect.bottom && clientX > rect.left
}

const getBoundingBorderRect = (computedStyle: CSSStyleDeclaration, boundingClientRect: DOMRect): DOMRect => {
  let top = boundingClientRect.top
  let right = boundingClientRect.right
  let bottom = boundingClientRect.bottom
  let left = boundingClientRect.left

  if (computedStyle.boxSizing === 'content-box') {
    top -= parseInt(computedStyle.paddingTop, 10)
    right += parseInt(computedStyle.paddingRight, 10)
    bottom += parseInt(computedStyle.paddingBottom, 10)
    left -= parseInt(computedStyle.paddingLeft, 10)

    top -= parseInt(computedStyle.borderTopWidth, 10)
    right += parseInt(computedStyle.borderRightWidth, 10)
    bottom += parseInt(computedStyle.borderBottomWidth, 10)
    left -= parseInt(computedStyle.borderLeftWidth, 10)
  }

  return {
    top,
    right,
    bottom,
    left,
    x: left,
    y: top,
    height: bottom - top,
    width: right - left,
    toJSON: () => {
      throw Error('Not yet implemented.')
    },
  }
}

const getBoundingMarginRect = (computedStyle: CSSStyleDeclaration, boundingClientRect: DOMRect) => {
  let top = boundingClientRect.top
  let right = boundingClientRect.right
  let bottom = boundingClientRect.bottom
  let left = boundingClientRect.left

  top -= parseInt(computedStyle.marginTop, 10)
  right += parseInt(computedStyle.marginRight, 10)
  bottom += parseInt(computedStyle.marginBottom, 10)
  left -= parseInt(computedStyle.marginLeft, 10)

  if (computedStyle.boxSizing === 'content-box') {
    top -= parseInt(computedStyle.paddingTop, 10)
    right += parseInt(computedStyle.paddingRight, 10)
    bottom += parseInt(computedStyle.paddingBottom, 10)
    left -= parseInt(computedStyle.paddingLeft, 10)

    top -= parseInt(computedStyle.borderTopWidth, 10)
    right += parseInt(computedStyle.borderRightWidth, 10)
    bottom += parseInt(computedStyle.borderBottomWidth, 10)
    left -= parseInt(computedStyle.borderLeftWidth, 10)
  }

  return {
    top,
    right,
    bottom,
    left,
    x: left,
    y: top,
    height: bottom - top,
    width: right - left,
    toJSON: () => {
      throw Error('Not yet implemented.')
    },
  }
}
