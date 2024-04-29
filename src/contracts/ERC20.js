import ercdemogenerator from "../contractgenerators/ercdemogenerator"

const erc20 = {
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
      name: 'permit',
      label: 'Permit',
      type: 'checkbox',
    }
  ],
  generatorFunction: ercdemogenerator
}

export default erc20