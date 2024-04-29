import ercdemogenerator from "../contractgenerators/ercdemogenerator"

const ERC404 = {
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
      name: 'decimal',
      label: 'Decimal',
      type: 'text',
    },
    {
      name: 'mintable',
      label: 'Mintable',
      type: 'checkbox',
    },
    {
      name: 'transfer',
      label: 'Transfer',
      type: 'checkbox',
    },
    {
      name: 'merkle',
      label: 'Merkle',
      type: 'checkbox',
    },
    {
      name: 'transferexempt',
      label: 'Transfer Exempt',
      type: 'checkbox',
    }
  ],
  generatorFunction: ercdemogenerator
}

export default ERC404