import { launch } from '../setup'

import type { Browser, Page } from 'puppeteer'
it('should inspect', async () => {
  const browser: Browser = await launch()
  const page: Page = await browser.newPage()

  await page.goto('https://js-cosmos.github.io/inspect-element/tests/border-and-content-box/index.html')
  await page.keyboard.down('Meta')
  await page.mouse.move(10, 10)

  const coverStyle = (await page.evaluate(() => {
    const el = document.querySelector('#inspect-element-cover')
    return JSON.parse(JSON.stringify(getComputedStyle(el!)))
  })) as ReturnType<typeof getComputedStyle>
  expect(coverStyle.width).toBe('30px')
  expect(coverStyle.height).toBe('40px')
  expect(coverStyle.borderTopWidth).toBe('0px')
  expect(coverStyle.borderRightWidth).toBe('0px')
  expect(coverStyle.borderBottomWidth).toBe('0px')
  expect(coverStyle.borderLeftWidth).toBe('0px')

  const borderStyle = (await page.evaluate(() => {
    const el = document.querySelector('#inspect-element-border')
    return JSON.parse(JSON.stringify(getComputedStyle(el!)))
  })) as ReturnType<typeof getComputedStyle>
  expect(borderStyle.width).toBe('30px')
  expect(borderStyle.height).toBe('40px')
  expect(borderStyle.borderTopWidth).toBe('70px')
  expect(borderStyle.borderRightWidth).toBe('71px')
  expect(borderStyle.borderBottomWidth).toBe('72px')
  expect(borderStyle.borderLeftWidth).toBe('73px')

  await page.keyboard.up('Meta')
  await browser.close()
})
