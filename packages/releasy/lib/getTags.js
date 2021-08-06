import { spawnSync } from 'child_process'

const tagName = (startFrom, tag) => {
  if (startFrom > 0) {
    return tag.slice(0, startFrom)
  }

  return tag
}

const tagVersion = (startFrom, tag) => tag.slice(startFrom + 1)

export function latestsTags () {
  const tags = spawnSync('git', ['tag', '--list', '--sort=-taggerdate'], { encoding : 'utf8' }).stdout.toString()

  if (!tags.length) {
    throw new Error ('NO_TAGS')
  }

  const latestsTags = {}

  for (const tag of tags.split('\n')) {
    if (!!tag) {
      let delimiter = tag.indexOf('@')

      if (tag.startsWith('@')) {
        delimiter = tag.slice(1).indexOf('@') + 1
      }

      const pkg = tagName(delimiter, tag)

      if (!latestsTags[pkg]) {
        latestsTags[pkg] = tagVersion(delimiter, tag)
      }
    }
  }

  return latestsTags
}
