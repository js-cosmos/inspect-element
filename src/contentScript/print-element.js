import configs, { onChange } from '../configs'

let actionKeyList = undefined
let isPrintTargetElement = undefined

const getActionKeyList = () => {
  actionKeyList = configs.modifierKeyCombination
}
const getIsPrintTargetElement = () => {
  isPrintTargetElement = configs.isPrintTargetElement
}

getActionKeyList()
getIsPrintTargetElement()

onChange('modifierKeyCombination', getActionKeyList)
onChange('isPrintTargetElement', getIsPrintTargetElement)

export const getTargetElement = event => {
  if (isPrintTargetElement === false) return
  for (let key of actionKeyList) {
    if (event[key] === false) return
  }

  console.log(event.target)
  event.preventDefault()
}
