import { erc1155 } from "@openzeppelin/wizard"


const erc1155generator = ({ name, uri, mintable, burnable, pausable, upgradableuri, supply }) => {
  return erc1155.print(
    {
      name: name || 'ExampleToken',
      uri: uri || '',
      mintable: mintable || false,
      burnable: burnable || false,
      pausable: pausable || false,
      updatableUri: upgradableuri || false,
      supply: supply || false
    }
  )
}

export default erc1155generator