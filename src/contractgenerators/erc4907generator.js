const getErc4907String = ({ name, symbol, setuser, getuser, supportsinterface }) => {
  return `TODO: Implement ERC4907 Generator`
}

const erc4907generator = ({ name, symbol, setuser, getuser, supportsinterface }) => {
  return getErc4907String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      setuser: setuser || false,
      getuser: getuser || false,
      supportsinterface: supportsinterface || false
    }
  )
}

export default erc4907generator