const path = require('path');

const buildEslintCommand = filenames => {
  return `yarn nextjs:lint --fix --file ${filenames
    .map((f, index) => {
      const target = path.relative(process.cwd(), f).split('/').slice(2).join('/');

      console.log('Detected Target: ', target);

      return path.relative(process.cwd(), f).split('/').slice(2).join('/');
    })
    .join(' --file ')}`;
};

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
};
