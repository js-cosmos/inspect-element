import { launch } from '../setup'

import type { Browser, Page } from 'puppeteer'

it('should inspect', async () => {
  const browser: Browser = await launch()
  const page: Page = await browser.newPage()

  await page.goto('https://google.com')
  await page.evaluate(() => {
    const html = `
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        #test {
          width: 30px;
          height: 40px;
          border: 0px solid black;
          border-top-width: 70px;
          border-right-width: 71px;
          border-bottom-width: 72px;
          border-left-width: 73px;
          box-sizing: border-box;
        }
      </style>
      <div id="test">div</div>
    `

    document.body.innerHTML = html
  })

  await page.keyboard.down('Meta')
  await page.mouse.move(10, 10)

  const coverStyle = (await page.evaluate(() => {
    const el = document.querySelector('#inspect-element-cover')
    return JSON.parse(JSON.stringify(getComputedStyle(el!)))
  })) as ReturnType<typeof getComputedStyle>
  expect(coverStyle.width).toBe('0px')
  expect(coverStyle.height).toBe('0px')
  expect(coverStyle.borderTopWidth).toBe('0px')
  expect(coverStyle.borderRightWidth).toBe('0px')
  expect(coverStyle.borderBottomWidth).toBe('0px')
  expect(coverStyle.borderLeftWidth).toBe('0px')

  const borderStyle = (await page.evaluate(() => {
    const el = document.querySelector('#inspect-element-border')
    return JSON.parse(JSON.stringify(getComputedStyle(el!)))
  })) as ReturnType<typeof getComputedStyle>
  expect(borderStyle.width).toBe('0px')
  expect(borderStyle.height).toBe('0px')
  expect(borderStyle.borderTopWidth).toBe('70px')
  expect(borderStyle.borderRightWidth).toBe('71px')
  expect(borderStyle.borderBottomWidth).toBe('72px')
  expect(borderStyle.borderLeftWidth).toBe('73px')

  await page.keyboard.up('Meta')
  await browser.close()
})
