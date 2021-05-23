import configs, { onChange } from '../configs'

let actionKeyList: string[]
let shouldPrintTargetElement: boolean

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

export const printTargetElement = (event: MouseEvent, target: EventTarget) => {
  if (shouldPrintTargetElement === false) return
  for (let key of actionKeyList) {
    if ((event as any)[key] === false) return
  }

  console.log(target)
  event.preventDefault()
}
