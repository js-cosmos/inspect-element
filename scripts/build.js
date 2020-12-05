const fs = require('fs')
const childProcess = require('child_process')
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

  childProcess.execSync('rm -rf dist')
  childProcess.execSync('rm -f dist.zip')

  // static files, contentScript
  childProcess.execSync('rollup -c', { stdio: 'inherit' })

  // browserAction
  process.chdir('src/browser-action')
  childProcess.execSync(process.argv.includes('--watch') ? 'yarn build --mode development' : 'yarn build', {
    stdio: 'inherit',
  })

  process.chdir(cwd)
  childProcess.execSync('zip -r dist dist/*')

  console.log('')
  console.log('Waiting for changes...')
}

function handleChildProcess(error, stdout, stderr) {
  if (error) {
    console.error(error)
    process.exit(1)
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
}
