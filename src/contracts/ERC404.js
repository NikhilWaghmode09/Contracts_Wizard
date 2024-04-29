import erc404generator from "../contractgenerators/erc404generator"

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
  generatorFunction: erc404generator
}

export default ERC404