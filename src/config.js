import fs from 'fs';

const configPath = './.reactcreaterc';

let customConfig = {};

if (fs.existsSync(configPath)) {
  customConfig = JSON.parse(fs.readFileSync(configPath));
}

if (customConfig.componentExtension && !(customConfig.componentExtension === '.tsx' || customConfig.componentExtension === '.js' || customConfig.componentExtension === '.jsx')) {
  throw new Error('Unsupported component extesion');
}

const config = {
  componentExtension: customConfig.componentExtension || '.tsx',
  styleExtension: customConfig.styleExtension || '.scss',
  alwaysCreateIndexFile: customConfig.alwaysCreateIndexFile || false
};

export default config;