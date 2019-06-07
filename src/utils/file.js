import fs from 'fs';

function createDirectory(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function createFiles(extensions, subDir, component, template, cb) {
  extensions.forEach((ext) => {
    if (ext === '.js' || ext === '.jsx' || ext === '.tsx') {
      // Writing up markup to component (.js, .jsx, .tsx) file
      cb(subDir, component, ext, template);
    } else {
      cb(subDir, component, ext, '');
    }
  })
}

function writeToFile(subDir, component, ext, compTmpl) {
  fs.writeFile(subDir + component + ext, compTmpl, (err) => {
    if (err) { throw err };
  });
}

export {
	createDirectory,
	createFiles,
	writeToFile
};