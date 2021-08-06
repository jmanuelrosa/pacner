#!/usr/bin/env node

import buildOptions from 'minimist-options'
import minimist from 'minimist'

import { cli } from '../index.js'

const commands = buildOptions({
	package: {
		type: 'string',
		alias: 'p'
	},
	help: {
		type: 'boolean',
		alias: 'h',
    default: false
	},
});

function start () {
  const options = minimist(process.argv.slice(2), commands);

  if (options.help) {
    console.log(help())

    process.exit(0)
  }

  cli(options)
}

start()
