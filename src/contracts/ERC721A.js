import ercdemogenerator from "../contractgenerators/ercdemogenerator"

const erc721a = {
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
      name: 'queryable',
      label: 'Queryable',
      type: 'checkbox',
    }
  ],
  generatorFunction: ercdemogenerator
}

export default erc721a