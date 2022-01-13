const fse = require('fs-extra')

const postBuild = () => {
  const dest = `dist/app/client`

  fse.copySync('static/favicon.ico', `${dest}/favicon.ico`)
  console.info(`static favicon.ico copied into ${dest}`)

  fse.copySync('static/robots.txt', `${dest}/robots.txt`)
  console.info(`static robots.txt copied into ${dest}`)
}

postBuild()
