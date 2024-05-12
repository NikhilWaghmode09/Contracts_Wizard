const getErc1155String = ({ name, uri, mintable, burnable, pausable, upgradableuri, supply }) => {
  let ownableimport = (mintable || pausable || upgradableuri) ? `\nimport "@openzeppelin/contracts/access/Ownable.sol";` : '';

  let ownableinherit = (mintable || pausable || upgradableuri) ? `, Ownable` : '';

  let ownableparameter = (mintable || pausable || upgradableuri) ? `address initialOwner` : '';
  let ownableconstructor = (mintable || pausable || upgradableuri) ? `Ownable(initialOwner)` : '';
  let mintable_fun = mintable ? `
  function mint(address account, uint256 id, uint256 amount, bytes memory data)
    public
    onlyOwner
  {
    _mint(account, id, amount, data);
  }
  function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
    public
    onlyOwner
  {
    _mintBatch(to, ids, amounts, data);
  }` : '';
  let supplyinherit = supply ? `, ERC1155Supply` : '';
  let burnableimport = burnable ? `\nimport "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";` : '';
  let burnableinherit = burnable ? `, ERC1155Burnable` : '';

  let pausableimport = pausable ? `\nimport "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";` : '';
  let pausableinherit = pausable ? `, ERC1155Pausable` : '';
  let pausable_fun = pausable ? `
  function pause() public onlyOwner {
    _pause();
  }\n
  function unpause() public onlyOwner {
    _unpause();
  }` : '';
  let update_fun = (pausable || supply) ? `
  function _update(address from, address to, uint256[] memory ids, uint256[] memory values)
    internal
    override(ERC1155${pausableinherit}${supplyinherit})
  {
    super._update(from, to, ids, values);
  }` : '';

  let upgradeable_fun = upgradableuri ? `
  function setURI(string memory newuri) public onlyOwner {
    _setURI(newuri);
  }` : '';
  let supplyimport = supply ? `\nimport "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";` : '';
  


  return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
  
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";${ownableimport}${pausableimport}${burnableimport}${supplyimport}
  
contract ${name} is ERC1155${ownableinherit}${pausableinherit}${burnableinherit}${supplyinherit} {
  constructor(${ownableparameter}) ERC1155("${uri}")${ownableconstructor} {}
  ${upgradeable_fun}${pausable_fun}${mintable_fun}${update_fun}
}`;
}

const erc1155generator = ({ name, uri, mintable, burnable, pausable, upgradableuri, supply }) => {
  return getErc1155String(
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