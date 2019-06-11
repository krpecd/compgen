# compgen
Simple React CLI that aims to speed up development by allowing you to create react components from the command line with lots of customizations.

Based on: https://github.com/ipetez/react-create

## Installation

### Via Github repo
Clone Repository
```bash
git clone https://github.com/krpecd/compgen.git
```
Navigate to the repo
```bash
cd compgen
```
Install dependencies
```bash
npm i
```
Do a build
```bash
npm run build
```
Lastly, run this command in root folder of repo to add script to NPM path (So you can execute anywhere)
```bash
npm link
```

### npm global install

```bash
git clone https://github.com/krpecd/compgen.git
```
Install compgen globally 
```bash
npm i <COMPGEN_FOLDER> -g
```

## Usage
    Usage: compgen <componentName> [options]

    Options:
      -v, --version              Outputs the version number (e.g rc -v)
      -h, --help                 Prints out usage options
      -d, --dir <dirname>        Creates a [component name] directory with component files inside in specified location
      -i, --index                Includes a index.js file with component (only when using creating component in directory)
 

## Configuration
For custom configuration create `.compgenrc` file in your projects root folder.

**Default config**:
```json
{
  "alwaysCreateIndexFile": false,
  "componentExtension": ".tsx",
  "styleExtenstion": ".scss"
}
```

### Options

**alwaysCreateIndexFile**

Always include 'index.js' file if creating component inside directory.

**componentExtension**

Supported extensions are `.js`, `.jsx`, `.tsx`

**styleExtension**

You can specify your styles extension according to preprocessor you are using e.g.: `.scss`, `.less`, `.styl`, `.css`
