import bump from 'conventional-recommended-bump'

export function cli () {
  const pkg = 'peers'
  const path = `/home/jmanuelrosa/Developer/personal/pacner/packages/${pkg}`

  bump({
    preset: 'conventionalcommits',
    path: path,
    lernaPackage: `@pacner/${pkg}`,
  }, (error, recommendation) => {
    console.log(recommendation.releaseType);
  });
}


// import { analyzeCommits } from '@semantic-release/commit-analyzer'
// import conventionalCommitsParser from 'conventional-commits-parser'
// import gitRawCommits from 'git-raw-commits'
// import gitSemverTags from 'git-semver-tags'

// const Transform = require('stream').Transform;

//   /// Create the transform stream:
// const test = new Transform({
//   decodeStrings: false
// });

// test._transform = function(chunk, encoding, done) {
//   done(null, chunk.toString().toUpperCase());
// };

// export function cli() {
//   const pkg = 'peers'
//   const path = `/home/jmanuelrosa/Developer/personal/pacner/packages/${pkg}`
//   const lernaPackage = `@pacner/${pkg}`

//   gitSemverTags({
//     lernaTags: !!lernaPackage,
//     package: lernaPackage
//   }, (err, tags) => {
//     if (err) {
//       return cb(err)
//     }

//     gitRawCommits({
//       format: '%B%n-hash-%n%H',
//       from: tags[0] || '',
//       path
//     })
//       .pipe(test)
//   })
// }
