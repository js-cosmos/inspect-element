const configs = {
  coverColor: '#62C0CC80',
  paddingColor: '#62D56E80',
  borderColor: '#DDE64880',
  marginColor: '#FC923580',
  mode: 'margin',
  modifierKeyCombination: ['metaKey'],
  shouldPrintTargetElement: false,
  showRenderedElementInfo: true,
  isCoverSidelineEnabled: true,
  isPaddingSidelineEnabled: true,
  isBorderSidelineEnabled: true,
  isMarginSidelineEnabled: true,
  coverSidelineColor: '#62C0CCB3',
  paddingSidelineColor: '#62D56EB3',
  borderSidelineColor: '#DDE648B3',
  marginSidelineColor: '#FC9235B3',
  count: 0,
  dismissed: false,
}
const configKeys = Object.keys(configs) as (keyof typeof configs)[]

const listeners = configKeys.reduce((listeners, key) => {
  listeners[key] = new Set()
  return listeners
}, {} as Record<keyof typeof configs, Set<Function>>)

chrome.storage.sync.get(configKeys, values => {
  for (const key of configKeys) {
    if (values[key] !== undefined) {
      ;(configs as any)[key] = values[key]
      listeners[key].forEach(fn => fn(configs[key]))
    } else chrome.storage.sync.set({ [key]: configs[key] })
  }
})
;(chrome.storage.sync as any).onChanged.addListener((changes: any) => {
  for (const key of configKeys) {
    if (changes[key]) {
      ;(configs as any)[key] = changes[key].newValue
      listeners[key].forEach(fn => fn(configs[key]))
    }
  }
})
export function onChange(key: keyof typeof listeners, callback: Function) {
  listeners[key].add(callback)
}

export default configs
