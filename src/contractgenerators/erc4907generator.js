const getErc4907String = ({ name, symbol, setuser, getuser, supportsinterface }) => {
  let setuserfun = setuser ? `
  function setUserExpires(uint256 tokenId, address user, uint64 expires) public virtual{
    setUser(tokenId, user, expires);
    emit UpdateUser(tokenId, user, expires);
  }
  ` : '';

  let getuserfun = getuser ? `
  function getuseraddress(uint256 tokenId) public view returns(address) {
    return userOf(tokenId);
  }

  function getuserexpires(uint256 tokenId) public view returns (uint256) {
    return userExpires(tokenId);
  }
  ` : '';

  let supportsinterfacefun = supportsinterface ? `
  function checkInterface(bytes4 interfaceId) public view returns (bool) {
    return supportsInterface(interfaceId);
  }
  ` : '';


  return `// SPDX-License-Identifier: CC0-1.0
pragma solidity ^0.8.0;
  
import "./ERC4907.sol";
  
contract ${name} is ERC4907 {
  constructor(string memory name, string memory symbol) ERC4907("${name}","${symbol}") {}
  ${getuserfun}${setuserfun}${supportsinterfacefun}
}`;
}

const erc4907generator = ({ name, symbol, setuser, getuser, supportsinterface }) => {
  return getErc4907String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      setuser: setuser || false,
      getuser: getuser || false,
      supportsinterface: supportsinterface || false
    }
  )
}

export default erc4907generator