const
  args = process.argv.slice(2),

  // Component arguments
  withFolder = (args.includes('--dir')) || (args.includes('-d')),
  withStyle = (args.includes('--style')) || (args.includes('-s')),
  withIndex = (args.includes('--index')) || (args.includes('-i'));

// Get subfolder from params 
let folderIndex = -1;
let subFolder = '';

if (args.indexOf('-d') > 0) {
  folderIndex = args.indexOf('-d');
}
if (args.indexOf('--dir') > 0) {
  folderIndex = args.indexOf('--dir');
}

if (folderIndex > 0) {
  subFolder = args[folderIndex + 1];

  if (subFolder == '--style' || subFolder == '-s' || subFolder == '-index' || subFolder == '-i') {
    subFolder = '';
  } else {
    if (subFolder && subFolder[subFolder.length - 1] !== '/') {
      subFolder = subFolder + '/';
    }
  }
}

// 'variables accessible globally
export { withFolder, withStyle, withIndex, subFolder }