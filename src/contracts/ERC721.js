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
      name: 'mintable',
      label: 'Mintable',
      type: 'checkbox',
    },
    {
      name: 'incremental',
      label: 'Auto Increment IDs',
      type: 'checkbox',
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
      name: 'votes',
      label: 'Votes',
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