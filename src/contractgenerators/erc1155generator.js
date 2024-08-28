const getErc1155String = ({ name, uri, burnable, supply, pausable, updatableuri, soulbound}) => {
  let supplyimport = supply ? `\n  import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";` : '';
  let supplyinherit = supply ? `, ERC1155Supply` : '';

  let burnableimport = (burnable && !pausable) ? `\n  import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";` : '';
  let burnpauseimport = (burnable && pausable) ? `\n  import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";` : '';

  let burnableinherit = (burnable && !pausable) ? `, ERC1155Burnable` : '';
  let burnpauseinherit = (burnable && pausable) ? `, ERC1155Burnable` : '';


  let pausableimport = (pausable && !updatableuri) ? `\n  import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";` : '';
  let pauseupdateimport = (pausable && updatableuri) ? `\n  import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Pausable.sol";` : '';

  let pausableinherit = (pausable && !updatableuri) ? `, ERC1155Pausable` : '';
  let pauseupdateinherit = (pausable && updatableuri) ? `, ERC1155Pausable` : '';

  let soulbound_fun = soulbound ? `
      function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes memory data) public virtual override {
          require(false, "SoulboundToken1155: Transfers are not allowed");
      }

      function safeBatchTransferFrom(address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public virtual override {
          require(false, "SoulboundToken1155: Transfers are not allowed");
      }

      function setApprovalForAll(address operator, bool approved) public virtual override {
          require(false, "SoulboundToken1155: Approvals are not allowed");
      }

      function isApprovedForAll(address account, address operator) public view virtual override returns (bool) {
          return false;
      }\n`: '';
  let pausable_fun = pausable ? `
      function pause() public onlyOwner {
          _pause();
      }\n
      function unpause() public onlyOwner {
          _unpause();
      }\n` : '';

  let update_fun = (pausable || supply) ? `
      function _update(address from, address to, uint256[] memory ids, uint256[] memory values) internal override(ERC1155${pausableinherit}${supplyinherit}) {
          super._update(from, to, ids, values);
      }\n` : '';

  let updatable_fun = updatableuri ? `
      function setURI(string memory newuri) public onlyOwner {
          _setURI(newuri);
      }\n` : '';

  return `// SPDX-License-Identifier: MIT
  // Compatible with OpenZeppelin Contracts ^5.0.0
  pragma solidity ^0.8.20;
  
  import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";${burnableimport}${pausableimport}
  import "@openzeppelin/contracts/access/Ownable.sol";${pauseupdateimport}${burnpauseimport}${supplyimport}
  
  contract ${name} is ERC1155${burnableinherit}${pausableinherit}, Ownable${pauseupdateinherit}${burnpauseinherit}${supplyinherit} {
      constructor(address initialOwner) 
          ERC1155("${uri}") 
          Ownable(initialOwner) 
      {}
      ${updatable_fun}${pausable_fun}
      function mint(address account, uint256 id, uint256 amount, bytes memory data) public onlyOwner {
          _mint(account, id, amount, data);
      }
  
      function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data) public onlyOwner {
          _mintBatch(to, ids, amounts, data);
      }
      ${update_fun}${soulbound_fun}
  }`;
}

const erc1155generator = ({ name, uri, burnable, supply, pausable, updatableuri, soulbound}) => {
  return getErc1155String(
    {
      name: name || 'ExampleToken',
      uri: uri || '',
      burnable: burnable || false,
      supply: supply || false,
      pausable: pausable || false,
      updatableuri: updatableuri || false,
      soulbound: soulbound || false
    }
  )
}

export default erc1155generator