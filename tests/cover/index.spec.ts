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
  expect(coverStyle.width).toBe('30px')
  expect(coverStyle.height).toBe('40px')
  expect(coverStyle.borderTopWidth).toBe('0px')
  expect(coverStyle.borderRightWidth).toBe('0px')
  expect(coverStyle.borderBottomWidth).toBe('0px')
  expect(coverStyle.borderLeftWidth).toBe('0px')

  await page.keyboard.up('Meta')
  await browser.close()
})
