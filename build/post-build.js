const fse = require('fs-extra')

const postBuild = () => {
  const dest = `dist/app`

  fse.copySync('public/favicon.ico', `${dest}/favicon.ico`)
  console.info(`public favicon.ico copied into ${dest}`)

  fse.copySync('public/robots.txt', `${dest}/robots.txt`)
  console.info(`public robots.txt copied into ${dest}`)
}

postBuild()
