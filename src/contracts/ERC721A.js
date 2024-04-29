import ercdemogenerator from "../contractgenerators/ercdemogenerator"

const ERC721A = {
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

export default ERC721A