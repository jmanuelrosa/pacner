#!/usr/bin/env node

import { peers } from '..'

const WITH_OPTIONAL = {
  '--optional': true,
  '-o': true
}

function isInstalling () {
  const { cooked } = JSON.parse(process.env.npm_config_argv)

  return ['install', 'i'].includes(cooked[0])
}

(async function main () {
  if (process.env.PEERS_RUNNING || !isInstalling()) {
    return
  }

  process.env.PEERS_RUNNING = true

  const dependencies = await peers(WITH_OPTIONAL[process.argv[2]])

  if (dependencies !== false) {
    console.log(`Successfully installed ${dependencies.length} peer dependencies.`)
  }

  process.env.PEERS_RUNNING = false
}()).catch(error => {
  process.env.PEERS_RUNNING = false
  console.error(`Oops! Something went wrong! :(

${error}`)
})
