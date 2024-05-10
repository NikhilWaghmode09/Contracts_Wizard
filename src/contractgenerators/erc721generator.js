const getErc721String = ({ name, symbol, mintable, burnable, pausable, votes, baseuri, uristorage, enumerable, incremental }) => {
  let ownableimport = (mintable || pausable) ? `import "@openzeppelin/contracts/access/Ownable.sol";` : '';
  let ownableinherit = (mintable || pausable) ? `, Ownable` : '';
  let ownableparameter = (mintable || pausable) ? `address initialOwner` : '';
  let ownableconstructor = mintable ? `Ownable(initialOwner)` : '';
  let mintablefunction = (mintable && !incremental) ? `
  function safeMint(address to, uint256 tokenId) public onlyOwner {
    _safeMint(to, tokenId);
  }` : '';

  let incrementaldeclaration = (incremental && mintable) ? `uint256 private _nextTokenId;` : '';
  let incrementalfunction = (mintable && incremental) ? `
  function safeMint(address to) public onlyOwner {
    uint256 tokenId = _nextTokenId++;
    _safeMint(to, tokenId);
  }` : '';

  let baseUrifunction = baseuri ? `function _baseURI() internal pure override returns (string memory) {
    return "${baseuri}";
}` : '';

  let burnableimport = burnable ? `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol"; ` : '';
  let burnableinherit = burnable ? `, ERC721Burnable` : '';

  let pausableimport = pausable ? `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";` : '';
  let pausableinherit = pausable ? `, ERC721Pausable` : '';
  let pausablefunction = pausable ? `
  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }

  // The following functions are overrides required by Solidity.

  function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Pausable) returns (address) {
    return super._update(to, tokenId, auth);
  }` : '';

  let voteimport = votes ? `import "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";` : '';
  let voteinherit = votes ? `, EIP712, ERC721Votes` : '';
  let voteconstructor = votes ? `EIP712("ExampleToken", "1")` : '';
  let votefunction = votes ? `// The following functions are overrides required by Solidity.

  function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Votes) returns (address) {
    return super._update(to, tokenId, auth);
  }

  function _increaseBalance(address account, uint128 value) internal override(ERC721, ERC721Votes) {
    super._increaseBalance(account, value);
  }` : '';

  let uristorageimport = uristorage ? `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; ` : '';
  let uristorageinherit = uristorage ? `, ERC721URIStorage` : '';
  let uristoragefunction = uristorage ? `
  function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
  return super.tokenURI(tokenId);
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
  return super.supportsInterface(interfaceId);
  }` : '';

  let enumerableimport = enumerable ? `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";` : '';
  let enumerableinherit = enumerable ? `, ERC721Enumerable` : '';
  let enumerablefunction = enumerable ? `
  // The following functions are overrides required by Solidity.

  function _update(address to, uint256 tokenId, address auth) internal override(ERC721, ERC721Enumerable) returns (address) {
    return super._update(to, tokenId, auth);
  }

  function _increaseBalance(address account, uint128 value) internal override(ERC721, ERC721Enumerable) {
    super._increaseBalance(account, value);
  }

  function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721Enumerable) returns (bool) {
    return super.supportsInterface(interfaceId);
  }` : '';

  return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
  
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
${ownableimport}
${burnableimport}
${pausableimport}
${voteimport}
${uristorageimport}
${enumerableimport}
  
contract ${name} is ERC721${ownableinherit}${burnableinherit}${pausableinherit}${voteinherit}${uristorageinherit}${enumerableinherit} {
  ${incrementaldeclaration}
  constructor(${ownableparameter}) ERC721("${name}", "${symbol}") ${ownableconstructor}${voteconstructor}{}
  ${mintablefunction}${pausablefunction}${votefunction}${uristoragefunction}${enumerablefunction}${incrementalfunction}${baseUrifunction}
}

  `;
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
      uriStorage: uristorage || null,
      enumerable: enumerable || false,
      incremental: incremental || false
    }
  )
}

export default erc721generator