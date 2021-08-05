import bump from 'conventional-recommended-bump'

export function cli () {
  bump({
    preset: 'conventionalcommits',
    path: "/home/jmanuelrosa/Developer/personal/pacner/packages/eslint-config",
    lernaPackage: "@pacner/eslint-config",
  }, (error, recommendation) => {
    console.log(recommendation.releaseType);
  });
}
