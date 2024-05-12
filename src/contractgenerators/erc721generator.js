const getErc721String = ({ name, symbol, mintable, burnable, pausable, votes, baseuri, uristorage, enumerable, incremental }) => {
  
  //import statements
  let enumerableimport = enumerable ? `\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";` : '';
  let uristorageimport = uristorage ? `\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; ` : '';
  let pausableimport = pausable ? `\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";` : '';
  let ownableimport = (mintable || pausable) ? `\nimport "@openzeppelin/contracts/access/Ownable.sol";` : '';
  let burnableimport = burnable ? `\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol"; ` : '';
  let voteimport = votes ? `\nimport "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";` : '';

  //inherit statements
  let enumerableinherit = enumerable ? `, ERC721Enumerable` : '';
  let uristorageinherit = uristorage ? `, ERC721URIStorage` : '';
  let pausableinherit = pausable ? `, ERC721Pausable` : '';
  let ownableinherit = (mintable || pausable) ? `, Ownable` : '';
  let burnableinherit = burnable ? `, ERC721Burnable` : '';
  let eipinherit = votes ? `, EIP712` : '';
  let voteinherit = votes ? `, ERC721Votes` : '';

  //incremental declaration and defination
  let incrementaldeclaration = (incremental && mintable) ? `\n  uint256 private _nextTokenId;` : '';
  let incrementaldefinition = (mintable && incremental) ? `\n    uint256 tokenId = _nextTokenId++;` : '';
  
  //parameters
  let mintparameter = (mintable && !incremental) ? `, uint256 tokenId` : '';
  let uriparameter = uristorage ?  `, string memory uri` : '';
  let ownableparameter = (mintable || pausable) ? `address initialOwner` : '';

  let urifunctioncall = uristorage ? `\n    _setTokenURI(tokenId, uri);` : '';

  //constructors
  let ownableconstructor = (mintable || pausable) ? `
    Ownable(initialOwner)` : '';
  let voteconstructor = votes ? `
    EIP712("ExampleToken", "1")` : '';

  //functions
  let pausable_fun = pausable ? `
  function pause() public onlyOwner {
    _pause();
  }\n
  function unpause() public onlyOwner {
    _unpause();
  }\n` : '';

  let mintable_fun = (mintable || uristorage) ? `
  function safeMint(address to${mintparameter}${uriparameter}) public onlyOwner {${incrementaldefinition}
    _safeMint(to, tokenId);${urifunctioncall}
  }\n` : '';
  
  let update_fun = (enumerable || pausable || votes) ? `
  function _update(address to, uint256 tokenId, address auth) 
    internal 
    override(ERC721${enumerableinherit}${pausableinherit}${voteinherit}) 
    returns (address) 
  {
    return super._update(to, tokenId, auth);
  }\n`: '';

  let baseuri_fun = baseuri ? `\n
  function _baseURI() 
    internal 
    pure 
    override 
    returns (string memory) 
  {
    return "${baseuri}";
  }` : '';

  let vote_enumerable_fun = (votes || enumerable) ? `
  function _increaseBalance(address account, uint128 value) 
    internal 
    override(ERC721${enumerableinherit}${voteinherit}) 
  {
    super._increaseBalance(account, value);
  }\n` : '';
  
  let uristorage_fun = uristorage  ? `
  function tokenURI(uint256 tokenId) 
    public 
    view 
    override(ERC721, ERC721URIStorage) 
    returns (string memory) 
  {
    return super.tokenURI(tokenId);
  }\n` : '';
  
  let enumerable_uristorage_fun = (enumerable || uristorage) ? `
  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721${enumerableinherit}${uristorageinherit})
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }` : '';


  return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
  
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";${enumerableimport}${uristorageimport}${pausableimport}${ownableimport}${burnableimport}${voteimport}
  
contract ${name} is ERC721${enumerableinherit}${uristorageinherit}${pausableinherit}${ownableinherit}${burnableinherit}${eipinherit}${voteinherit} {${incrementaldeclaration}
  constructor(${ownableparameter}) 
    ERC721("${name}", "${symbol}") ${ownableconstructor} ${voteconstructor} 
  {}
  ${pausable_fun} ${mintable_fun} ${update_fun} ${vote_enumerable_fun} ${uristorage_fun} ${enumerable_uristorage_fun} ${baseuri_fun}
}`;
}

const erc721generator = ({ name, symbol, mintable, burnable, pausable, votes, baseuri, uristorage, enumerable, incremental }) => {
  return getErc721String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      baseuri: baseuri || '',
      mintable: mintable || false,
      burnable: burnable || false,
      pausable: pausable || false,
      votes: votes || false,
      uristorage: uristorage || null,
      enumerable: enumerable || false,
      incremental: incremental || false
    }
  )
}

export default erc721generator