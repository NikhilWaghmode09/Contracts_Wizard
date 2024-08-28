//Last Update: 31st July 2024
const getErc721String = ({ name, symbol, burnable, pausable, soulbound, baseuri, uristorage, enumerable }) => {
  
  //import statements
  let enumerableimport = enumerable ? `\n  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";` : '';
  let uristorageimport = uristorage ? `\n  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; ` : '';
  let pausableimport = pausable ? `\n  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";` : '';
  let burnpauseimport = (burnable && pausable) ? `\n  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol"; ` : '';
  let burnableimport = (burnable && !pausable) ? `\n  import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol"; ` : '';
  

  //inherit statements 
  let enumerableinherit = enumerable ? `, ERC721Enumerable` : '';
  let uristorageinherit = uristorage ? `, ERC721URIStorage` : '';
  let pausableinherit = pausable ? `, ERC721Pausable` : '';
  let burnpauseinherit = (burnable && pausable) ? `, ERC721Burnable` : '';
  let burnableinherit = (burnable && !pausable) ? `, ERC721Burnable` : '';

  
  //parameters
  let uriparameter = uristorage ?  `, string memory uri` : '';
  let urifunctioncall = uristorage ? `_setTokenURI(tokenId, uri);` : '';

  //functions
  let soulbound_fun = soulbound ?  `
      function _transfer(address from, address to, uint256 tokenId) internal override {
        require(false, "SoulboundToken: Transfers are not allowed");
      }

      function approve(address to, uint256 tokenId) public override {
        require(false, "SoulboundToken: Approvals are not allowed");
      }

      function setApprovalForAll(address operator, bool approved) public override {
        require(false, "SoulboundToken: Approvals are not allowed");
      }\n` : '';

  let pausable_fun = pausable ? `
      function pause() public onlyOwner {
        _pause();
      }\n
      function unpause() public onlyOwner {
        _unpause();
      }\n` : '';

  let update_fun = (enumerable || pausable) ? `
      function _update(address to, uint256 tokenId, address auth) internal override(ERC721${enumerableinherit}${pausableinherit}) returns (address) {
        return super._update(to, tokenId, auth);
      }\n`: '';

  let baseuri_fun = baseuri ? `\n
      function _baseURI() internal pure override returns (string memory) 
      {
        return "${baseuri}";
      }\n` : '';

  let enumerable_fun = (enumerable) ? `
      function _increaseBalance(address account, uint128 value) internal override(ERC721${enumerableinherit}) 
      {
        super._increaseBalance(account, value);
      }\n` : '';
  
  let uristorage_fun = uristorage  ? `
      function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) 
      {
        return super.tokenURI(tokenId);
      }\n` : '';
  
  let enumerable_uristorage_fun = (enumerable || uristorage) ? `
      function supportsInterface(bytes4 interfaceId) public view override(ERC721${enumerableinherit}${uristorageinherit}) returns (bool)
      {
        return super.supportsInterface(interfaceId);
      }` : '';

  return `// SPDX-License-Identifier: MIT
  // Compatible with OpenZeppelin Contracts ^5.0.0
  pragma solidity ^0.8.20;
  
  import "@openzeppelin/contracts/token/ERC721/ERC721.sol";${enumerableimport}${uristorageimport}${burnableimport}${pausableimport}
  import "@openzeppelin/contracts/access/Ownable.sol";${burnpauseimport}
  
  contract ${name} is ERC721${enumerableinherit}${burnableinherit}${pausableinherit}, Ownable${burnpauseinherit} {
      constructor(address initialOwner)
          ERC721("${name}", "${symbol}")
          Ownable(initialOwner)
      {}
      ${pausable_fun}
      function safeMint(address to, uint256 tokenId${uriparameter}) public onlyOwner {
          _safeMint(to, tokenId);
          ${urifunctioncall}
      }
      ${baseuri_fun}${update_fun}${soulbound_fun}${enumerable_fun}${uristorage_fun}${enumerable_uristorage_fun}
      
  }`;
}

const erc721generator = ({ name, symbol, burnable, pausable, soulbound, baseuri, uristorage, enumerable }) => {
  return getErc721String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      baseuri: baseuri || '',
      burnable: burnable || false,
      pausable: pausable || false,
      soulbound: soulbound || false,
      uristorage: uristorage || null,
      enumerable: enumerable || false
    }
  )
}

export default erc721generator