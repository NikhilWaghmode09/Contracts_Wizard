import ercdemogenerator from "../contractgenerators/ercdemogenerator"

const erc4907 = {
  formFields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'symbol',
      label: 'Symbol',
      type: 'text',
    },
    {
      name: 'setuser',
      label: 'Set User',
      type: 'checkbox',
    },
    {
      name: 'getuser',
      label: 'Get user',
      type: 'checkbox',
    },
    {
      name: 'supportsinterface',
      label: 'Supports Interface',
      type: 'checkbox',
    },
  ],
  generatorFunction: ercdemogenerator
}

export default erc4907