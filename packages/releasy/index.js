import bump from 'conventional-recommended-bump'

export function cli () {
  bump({
    preset: 'conventionalcommits'
  }, (error, recommendation) => {
    console.log(recommendation.releaseType);
  });
}
