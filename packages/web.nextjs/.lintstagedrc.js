const path = require('path');

const buildEslintCommand = filenames => {
  console.log(`next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`);

  return `yarn workspace web.nextjs lint --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
