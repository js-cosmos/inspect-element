const fs = require('fs')
const childProcess = require('child_process')
const rimraf = require('rimraf').sync
const zip = require('cross-zip')
const cwd = process.cwd()

let timeout = null

if (process.argv.includes('--watch')) {
  fs.watch('src', { recursive: true }, debounceBuild)
  fs.watch('images', { recursive: true }, debounceBuild)
  fs.watch('manifest.json', debounceBuild)
}
debounceBuild()

function debounceBuild() {
  console.log('changed')
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    build()
  }, 200)
}

function build() {
  console.clear()

  rimraf('dist')
  rimraf('dist.zip')

  // static files, contentScript
  childProcess.execSync('rollup -c', { stdio: 'inherit' })

  // browserAction
  process.chdir('src/browser-action')
  childProcess.execSync(process.argv.includes('--watch') ? 'yarn build --mode development' : 'yarn build', {
    stdio: 'inherit',
  })

  process.chdir(cwd)
  zip.zipSync('dist', 'dist.zip')

  console.log('')
  console.log('Waiting for changes...')
}
