// Constants
import { withFolder, withStyle, withIndex, subFolder } from '../constants/env_vars';
import config from '../config';

// Used for reading and writing component files
import { createDirectory, createFiles, writeToFile } from '../utils/file';

// Loading in appropriate templates
import { typescriptTemplate, jsTemplate, indexTemplate } from '../templates/component';

let compTmpl = ''
if (config.componentExtension === '.tsx') { 
  compTmpl = typescriptTemplate 
}
if (config.componentExtension === '.js' || config.componentExtension === '.jsx') { 
  compTmpl = jsTemplate;
}

const
  args = process.argv.slice(2),
  component = args[1],
  extensions = [];

let subDir = '';

if (withStyle) {
  extensions.push(config.styleExtension)
}

// Adding component file extension
extensions.push(config.componentExtension);


// Creating component folder
if (withFolder) {
  subDir = (subFolder ? subFolder + component + '/' : component + '/');
  createDirectory(subDir);
}

setTimeout(() => {
  if (withFolder && (withIndex || config.alwaysCreateIndexFile)) {
    createFiles(['.js'], subDir, 'index', indexTemplate, writeToFile)
  }
  
  // Loop through to create necessary files
  createFiles(extensions, subDir, component, compTmpl, writeToFile);
}, 1000)
