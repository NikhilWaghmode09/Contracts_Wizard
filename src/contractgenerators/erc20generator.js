const geterc20String = ({ name, symbol, premint, mintable, burnable, pausable, flash, permit }) => {
  let ownableimport = (mintable || pausable) ? `\nimport "@openzeppelin/contracts/access/Ownable.sol";` : '';
  let ownableinherit = (mintable || pausable) ? `, Ownable` : '';
  let ownableparameter = (mintable || pausable) ? `address initialOwner` : '';
  let ownableconstructor = (mintable || pausable) ? `Ownable(initialOwner)` : '';
  let mintable_fun = mintable ? `
  function mint(address to, uint256 amount) public onlyOwner {
    _mint(to, amount);
  }` : '';
  
  let burnableimport = burnable ? `\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";` : '';
  let burnableinherit = burnable ? `, ERC20Burnable` : '';

  let pausableimport = pausable ? `\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";` : '';
  let pausableinherit = pausable ? ', ERC20Pausable' : '';
  let pausable_fun = pausable ? `
  function pause() public onlyOwner {
    _pause();
  }\n
  function unpause() public onlyOwner {
    _unpause();
  }` : '';
  let update_fun = pausable ? `
  function _update(address from, address to, uint256 value)
    internal
    override(ERC20, ERC20Pausable)
  {
    super._update(from, to, value);
  }` : '';

  let flashimport = flash ? `\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20FlashMint.sol";` : '';
  let flashinherit = flash ? `, ERC20FlashMint` : '';
  let permitimport = permit ? `\nimport "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";` : '';
  let permitinherit = permit ? `, ERC20Permit` : '';
  let permitconstructor = permit ? ` ERC20Permit("${name}")` : '';

  let premintstatement = /^\d+$/.test(premint) ? `\n  _mint(msg.sender, ${premint} * 10 ** decimals());\n  ` : '';
  return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
  
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";${burnableimport}${pausableimport}${ownableimport}${permitimport}${flashimport}
  
contract ${name} is ERC20${burnableinherit}${pausableinherit}${ownableinherit}${permitinherit}${flashinherit} {
  constructor(${ownableparameter}) ERC20("${name}", "${symbol}")${ownableconstructor}${permitconstructor} 
  {${premintstatement}}
  ${pausable_fun}${mintable_fun}${update_fun}
}`;
}

const erc20generator = ({ name, symbol, premint, mintable, burnable, pausable, flash, permit }) => {
  return geterc20String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      premint: premint || '',
      mintable: mintable || false,
      burnable: burnable || false,
      pausable: pausable || false,
      flash: flash || false,
      permit: permit || false,
    }
  )
}

export default erc20generator