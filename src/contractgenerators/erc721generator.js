import { erc721 } from "@openzeppelin/wizard"


const erc721generator = ({ name, symbol, mintable, burnable, pausable, votes, baseuri, uristorage, enumerable, incremental }) => {
  return erc721.print(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      baseUri: baseuri || '',
      mintable: mintable || false,
      burnable: burnable || false,
      pausable: pausable || false,
      votes: votes || false,
      uriStorage: uristorage || null,
      enumerable: enumerable || false,
      incremental: incremental || false
    }
  )
}

export default erc721generator