import { launch as puppeteerLaunch } from 'puppeteer'
import path from 'path'

import type { Browser } from 'puppeteer'

const pathToExtension = path.join(__dirname, '../dist')

export function launch(): Promise<Browser> {
  return puppeteerLaunch({
    executablePath: process.env.PUPPETEER_EXEC_PATH,
    headless: false,
    args: ['--no-sandbox', `--disable-extensions-except=${pathToExtension}`, `--load-extension=${pathToExtension}`],
  })
}
