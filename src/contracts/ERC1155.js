import ercdemogenerator from "../contractgenerators/ercdemogenerator"

const erc1155 = {
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
      name: 'mintable',
      label: 'Mintable',
      type: 'checkbox',
    },
    {
      name: 'burnable',
      label: 'Burnable',
      type: 'checkbox',
    },
    {
      name: 'supplytracking',
      label: 'Supply Tracking',
      type: 'checkbox',
    },
    {
      name: 'pausable',
      label: 'Pausable',
      type: 'checkbox',
    },
    {
      name: 'upgradableuri',
      label: 'Upgradable URI',
      type: 'checkbox',
    }
  ],
  generatorFunction: ercdemogenerator
}

export default erc1155