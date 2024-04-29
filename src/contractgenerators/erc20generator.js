import { erc20 } from "@openzeppelin/wizard"


const erc20generator = ({ name, symbol, mintable, burnable, pausable, votes, permit }) => {
  return erc20.print(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      mintable: mintable || false,
      burnable: burnable || false,
      pausable: pausable || false,
      votes: votes || false,
      permit: permit || false,
    }
  )
}

export default erc20generator