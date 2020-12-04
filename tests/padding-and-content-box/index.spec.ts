import { launch } from '../setup'

import type { Browser, Page } from 'puppeteer'
it('should inspect', async () => {
  const browser: Browser = await launch()
  const page: Page = await browser.newPage()

  await page.goto('https://js-cosmos.github.io/inspect-element/tests/padding-and-content-box/index.html')
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

  const paddingStyle = (await page.evaluate(() => {
    const el = document.querySelector('#inspect-element-padding')
    return JSON.parse(JSON.stringify(getComputedStyle(el!)))
  })) as ReturnType<typeof getComputedStyle>
  expect(paddingStyle.width).toBe('30px')
  expect(paddingStyle.height).toBe('40px')
  expect(paddingStyle.borderTopWidth).toBe('50px')
  expect(paddingStyle.borderRightWidth).toBe('51px')
  expect(paddingStyle.borderBottomWidth).toBe('52px')
  expect(paddingStyle.borderLeftWidth).toBe('53px')

  await page.keyboard.up('Meta')
  await browser.close()
})
