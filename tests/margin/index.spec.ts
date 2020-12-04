import { launch } from '../setup'

import type { Browser, Page } from 'puppeteer'
it('should inspect', async () => {
  const browser: Browser = await launch()
  const page: Page = await browser.newPage()

  await page.goto('https://js-cosmos.github.io/inspect-element/tests/margin/index.html')
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

  const marginStyle = (await page.evaluate(() => {
    const el = document.querySelector('#inspect-element-margin')
    return JSON.parse(JSON.stringify(getComputedStyle(el!)))
  })) as ReturnType<typeof getComputedStyle>
  expect(marginStyle.width).toBe('30px')
  expect(marginStyle.height).toBe('40px')
  expect(marginStyle.borderTopWidth).toBe('110px')
  expect(marginStyle.borderRightWidth).toBe('111px')
  expect(marginStyle.borderBottomWidth).toBe('112px')
  expect(marginStyle.borderLeftWidth).toBe('113px')

  await page.keyboard.up('Meta')
  await browser.close()
})
