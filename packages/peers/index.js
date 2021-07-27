import { spawn } from 'node:child_process'
import path from 'node:path'

const { peerDependencies, peerDependenciesMeta } = import(path.join(process.cwd(), 'package.json'))

function isYarn () {
  return process.env.npm_execpath.includes('yarn')
}

async function walk (arguments_, dependencies) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      process.env.npm_execpath,
      [...arguments_, ...dependencies],
      {
        stdio: 'inherit',
        encoding: 'utf8'
      }
    )

    child.on('error', reject)

    child.on('close', resolve)
  })
}

export async function peers (withOptionals = false) {
  const peers = Object.entries(peerDependencies)
  if (peers.length === 0) {
    return false
  }

  const addOptionals = Reflect.ownKeys(peerDependenciesMeta).length > 0 &&
    process.argv[2] &&
    withOptionals

  let arguments_ = ['--no-save', '--no-package-lock', 'install']
  if (isYarn()) {
    arguments_ = ['--peer', '--silent', '--pure-lockfile', 'add']
  }

  const dependencies = []
  for (const [depencency, version] of peers) {
    if (!addOptionals && peerDependenciesMeta[depencency]?.optional) {
      return
    }

    dependencies.push(`${depencency}@${version}`)
  }

  await walk(arguments_, dependencies)

  return dependencies
}
