import erc721generator from "../contractgenerators/erc721generator"

const ERC721 = {
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
      name: 'baseuri',
      label: 'Base URI',
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
      name: 'soulbound',
      label: 'Soulbound',
      type: 'checkbox',
    },
    {
      name: 'uristorage',
      label: 'URI Storage',
      type: 'checkbox'
    },
    {
      name: 'enumerable',
      label: 'Enumerable',
      type: 'checkbox',
    }
  ],
  generatorFunction: erc721generator
}

export default ERC721