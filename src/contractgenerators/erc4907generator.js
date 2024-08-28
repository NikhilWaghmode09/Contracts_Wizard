const getErc4907String = ({name, symbol, burnable, pausable, uristorage, soulbound, enumerable}) => {
  let burnable_fun = (burnable && !uristorage ) ? `
      function burn(uint256 tokenId) public {
          require(_isAuthorized(msg.sender, tokenId), "ERC721: caller is not authorized");
          _burn(tokenId);
          delete _users[tokenId]; // Remove user info associated with the token
      }` : '';

  let uriburn_fun = (uristorage && burnable ) ?   `function _burn(uint256 tokenId) internal virtual override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view virtual override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }` : '';
  
  let soulbound_fun = soulbound ? `
      function _transfer(address from, address to, uint256 tokenId) internal override {
          require(false, "SoulboundERC4907: Transfers are not allowed");
      }

      function approve(address to, uint256 tokenId) public override {
          require(false, "SoulboundERC4907: Approvals are not allowed");
      }

      function setApprovalForAll(address operator, bool approved) public override {
          require(false, "SoulboundERC4907: Approvals are not allowed");
      }\n` : '';

  let pausableimport = pausable ? `\nimport "@openzeppelin/contracts/utils/Pausable.sol";` : '';
  let pausableinherit = pausable ? `, Pausable` : '';
  let pausable_fun = pausable ? `
      function pause() public onlyOwner {
          _pause();
      }

      function unpause() public onlyOwner {
          _unpause();
      }\n` : '';
  let uristorageimport = uristorage ? `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";` : '';
  let uristorageinherit = uristorage ? `, ERC721URIStorage` : '';

  let enumerableimport = enumerable ? `import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";` : '';
  let enumerableinherit = enumerable ? `, ERC721Enumerable` : '';
  let enumerable_fun = enumerable ? `
      function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal virtual override(ERC721, ERC721Enumerable) {
          super._beforeTokenTransfer(from, to, tokenId);
      }

      function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, ERC721Enumerable) returns (bool) {
          return super.supportsInterface(interfaceId);
      }` : '';

  return `// SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  import "@openzeppelin/contracts/token/ERC721/ERC721.sol";${uristorageimport}
  import "./IERC4907.sol";${enumerableimport}${pausableimport}
  import "@openzeppelin/contracts/access/Ownable.sol";
  
  
  
  contract ${name} is ERC721${uristorageinherit}, IERC4907${enumerableinherit}${pausableinherit}, Ownable {
  
      struct UserInfo {
          address user;
          uint64 expires;
      }
  
      mapping(uint256 => UserInfo) internal _users;
  
      constructor() ERC721(${name}, ${symbol}) Ownable(msg.sender) {
      } //tokenticker is nothing but symbol.
  
      function mint(uint256 tokenId) public onlyOwner {
          _mint(msg.sender, tokenId);
      }
      
      function _baseURI() internal pure override returns (string memory) {
          return "";
      }
      
      function setUser(uint256 tokenId, address user, uint64 expires) public virtual override {
          require(_isAuthorized(msg.sender, user, tokenId), "ERC721: transfer caller is not owner nor authorized");
          require(userOf(tokenId) == address(0), "User already assigned");
          require(expires > block.timestamp, "expires should be in future");
          UserInfo storage info = _users[tokenId];
          info.user = user;
          info.expires = expires;
          emit UpdateUser(tokenId, user, expires);
      }
  
      function userOf(uint256 tokenId) public view virtual override returns (address) {
          if (uint256(_users[tokenId].expires) >= block.timestamp) {
              return _users[tokenId].user;
          }
          return address(0);
      
  
      function userExpires(uint256 tokenId) public view virtual override returns (uint256) {
          return _users[tokenId].expires;
      }
      ${uriburn_fun}${soulbound_fun}${pausable_fun}${burnable_fun}${enumerable_fun}
  }`;
}

const erc4907generator = ({name, symbol, burnable, pausable, uristorage, soulbound, enumerable}) => {
  return getErc4907String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      burnable: burnable || false,
      pausable: pausable || false,
      uristorage: uristorage || false,
      soulbound: soulbound || false,
      enumerable: enumerable || false
    }
  )
}

export default erc4907generator
