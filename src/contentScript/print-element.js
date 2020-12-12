import configs, { onChange } from '../configs'

let actionKeyList = undefined
let shouldPrintTargetElement = undefined

const getActionKeyList = () => {
  actionKeyList = configs.modifierKeyCombination
}
const getshouldPrintTargetElement = () => {
  shouldPrintTargetElement = configs.shouldPrintTargetElement
}

getActionKeyList()
getshouldPrintTargetElement()

onChange('modifierKeyCombination', getActionKeyList)
onChange('shouldPrintTargetElement', getshouldPrintTargetElement)

export const getTargetElement = event => {
  if (shouldPrintTargetElement === false) return
  for (let key of actionKeyList) {
    if (event[key] === false) return
  }

  console.log(event.target)
  event.preventDefault()
}
