import erc4907generator from "../contractgenerators/erc4907generator"

const ERC4907 = {
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
  generatorFunction: erc4907generator
}

export default ERC4907