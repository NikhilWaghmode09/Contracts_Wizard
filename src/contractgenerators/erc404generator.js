const getErc404String = ({ name, symbol, decimal, mintable, transfer, merkle, transferExempt }) => {
  return `TODO: Implement ERC404 Generator`
}

const erc404generator = ({ name, symbol, decimal, mintable, transfer, merkle, transferexempt }) => {
  return getErc404String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      decimal: decimal || '',
      mintable: mintable || false,
      transfer: transfer || false,
      merkle: merkle || false,
      transferExempt: transferexempt || false
    }
  )
}

export default erc404generator