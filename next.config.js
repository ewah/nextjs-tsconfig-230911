/** @type {import("next").NextConfig} */

const generateBuildId = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'dev';
  }
  const buildId = process.env.GIT_SHA || Date.now().toString();
  return buildId;
};


module.exports = {
  reactStrictMode: true,

  distDir: `.next/build/${generateBuildId()}`,
}
