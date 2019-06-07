import { withStyle } from '../constants/env_vars'
import config from '../config'

const
  args = process.argv.slice(2),
  component = args[0];

export const typescriptTemplate = 
`import React, { PureComponent, ReactNode } from 'react'
${withStyle ? `import cls from '${component}${config.styleExtension}'` : ''}

interface ${component}Props {
  children: ReactNode
}

class ${component} extends PureComponent<${component}Props> {
  public render(): ReactNode {
    const {children} = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

export default ${component}
`;

export const jsTemplate = 
`import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
${withStyle ? `import cls from '${component}${config.styleExtension}'` : ''}

class ${component} extends PureComponent {
  render() {
    const {children} = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

${component}.propTypes = {
  children: PropTypes.element.isRequired
}

export default ${component}
`;

export const indexTemplate = 
`import ${component} from './${component}'

export default ${component}
`;