const getErc721aString = ({ name, symbol, mintable, burnable, queryable }) => {
  return `TODO: Implement ERC721A Generator`
}

const erc721agenerator = ({ name, symbol, mintable, burnable, queryable }) => {
  return getErc721aString(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      mintable: mintable || false,
      burnable: burnable || false,
      queryable: queryable || false
    }
  )
}

export default erc721agenerator