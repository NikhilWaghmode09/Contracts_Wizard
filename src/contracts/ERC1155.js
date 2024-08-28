import erc1155generator from "../contractgenerators/erc1155generator"

const ERC1155 = {
  formFields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
    {
      name: 'uri',
      label: 'URI',
      type: 'text',
    },
    {
      name: 'burnable',
      label: 'Burnable',
      type: 'checkbox',
    },
    {
      name: 'supply',
      label: 'Supply Tracking',
      type: 'checkbox',
    },
    {
      name: 'pausable',
      label: 'Pausable',
      type: 'checkbox',
    },
    {
      name: 'updatableuri',
      label: 'Updatable URI',
      type: 'checkbox',
    },
    {
      name: 'soulbound',
      label: 'Soulbound',
      type: 'checkbox',
    }
  ],
  generatorFunction: erc1155generator
}

export default ERC1155