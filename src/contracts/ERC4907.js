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
      name: 'burnable',
      label: 'Burnable',
      type: 'checkbox',
    },
    {
      name: 'pausable',
      label: 'Pausable',
      type: 'checkbox',
    },
    {
      name: 'uristorage',
      label: 'URI Storage',
      type: 'checkbox',
    },
    {
      name: 'soulbound',
      label: 'Soulbound',
      type: 'checkbox',
    },
    {
      name: 'enumerable',
      label: 'Enumerable',
      type: 'checkbox',
    },
  ],
  generatorFunction: erc4907generator
}

export default ERC4907