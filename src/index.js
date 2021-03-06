#! /usr/bin/env node

import pjson from '../package.json';

const
  args = process.argv.slice(2),

  // options passed in as arguments
  version = (args.includes('-v')) || (args.includes('--version')),
  help = (args.includes('-h')) || (args.includes('--help'));

if (version) {
  console.log(pjson.version);
  process.exit();
}

if (help || !args) {
  console.log([
    'usage: compgen <componentName> [options]',
    '',
    'options:',
    '  -v, --version            Output\'s the version number (e.g compgen -v)',
    '  -d, --dir <dirname>      Creates a [component name] directory with component files inside in specified location',
    '  -i, --index              Includes a index.js file with component (only when using creating component in directory)',
    '  -s, --style                Creates a SCSS file and create import of the style in Component file'
  ].join('\n'));
  process.exit();
}

require('./scripts/component');
