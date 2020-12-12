import configs, { onChange } from '../configs'

let actionKeyList = undefined
const getActionKeyList = () => {
  actionKeyList = configs.modifierKeyCombination
}

getActionKeyList()
onChange('modifierKeyCombination', getActionKeyList)

export const getTargetElement = event => {
  for (let key of actionKeyList) {
    if (event[key] === false) return
  }

  console.log(event.target)
  event.preventDefault()
}
