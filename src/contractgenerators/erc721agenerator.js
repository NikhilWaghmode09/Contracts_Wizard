const getErc721aString = ({ name, symbol, mintable, burnable, queryable }) => {

  let mintableimport = mintable ? `\nimport '@openzeppelin/contracts/access/Ownable.sol';` : '';
  let burnableimport = burnable ? `\nimport 'erc721a/contracts/extensions/ERC721ABurnable.sol';` : '';
  let queryableimport = queryable ? `\nimport 'erc721a/contracts/extensions/ERC721AQueryable.sol';` : '';

  let mintableinherit = mintable ? ', Ownable' : '';
  let burnableinherit = burnable ? ', ERC721ABurnable' : '';
  let queryableinherit = queryable ? ', ERC721AQueryable' : '';

  let mintableconstructor = mintable ? 'Ownable(initialOwner)' : '';
  let mintableparameter = mintable ? 'address initialOwner' : '';
  let mintablefunction = mintable ? `
  function safeMint(address to, uint256 quantity) public onlyOwner { 
    _safeMint(to, quantity, '');
  }` : '';

  return `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
  
import 'erc721a/contracts/ERC721A.sol';${mintableimport}${burnableimport}${queryableimport}

contract ${name} is ERC721A ${mintableinherit} ${burnableinherit} ${queryableinherit}{
  constructor(${mintableparameter}) ERC721A ("${name}","${symbol}") ${mintableconstructor} 
  {}
  ${mintablefunction}
}
  `;
}

const erc721agenerator = ({ name, symbol, mintable, burnable, queryable }) => {
  return getErc721aString(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      mintable: mintable || false,
      burnable: burnable || false,
      queryable: queryable || false
    }
  )
}

export default erc721agenerator