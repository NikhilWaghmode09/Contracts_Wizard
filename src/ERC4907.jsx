import React, { useState } from 'react';
import './App.css';
//v1.1
const App1 = () => {
  const [getuser, setgetuser] = useState('');
  const [setuser, setsetuser] = useState('');
  const [supportsinterface, setsupportsinterface] = useState('');

  const [name, setname] = useState('');
  const [symbol, setsymbol] = useState('');
  useState(() => [name, symbol]);
  const handleNameChange = (event) => {
    setname(event.target.value);
  };
  const handleSymbolChange = (event) => {
    setsymbol(event.target.value);
  };

  const [functions, setFunctions] = useState({
    get: false,
    set: false,
    supports: false
  });


  const setFun = () => {                 
    if (!functions.set) {
      setsetuser(`
    function setUserExpires(uint256 tokenId, address user, uint64 expires) public virtual{
        setUser(tokenId, user, expires);
        emit UpdateUser(tokenId, user, expires);
    }
    `);
    } else {
      setsetuser('');
    }
    setFunctions(prevState => ({ ...prevState, set: !functions.set }));
  };
  

  const getFun = () => {                 
    if (!functions.get) {
      setgetuser(`
    function getuseraddress(uint256 tokenId) public view returns(address) {
        return userOf(tokenId);
    }
 
    function getuserexpires(uint256 tokenId) public view returns (uint256) {
         return userExpires(tokenId);
    }
    `);
    } else {
      setgetuser('');
    }
    setFunctions(prevState => ({ ...prevState, get: !functions.get }));
  };

  const supportsFun = () => {                 
    if (!functions.supports) {
      setsupportsinterface(`
    function checkInterface(bytes4 interfaceId) public view returns (bool) {
        return supportsInterface(interfaceId);
    }`);
    } else {
      setsupportsinterface('');
    }
    setFunctions(prevState => ({ ...prevState, supports: !functions.supports }));
  };


//Default Smart Contract Code.
  const defaultSolidityCode = `// SPDX-License-Identifier: CC0-1.0
  pragma solidity ^0.8.0;
  
  import "./ERC4907.sol";
  
  contract ${name || "ExampleToken"} is ERC4907 {
    constructor(string memory name, 
      string memory symbol
    ) ERC4907("${name || "ExampleToken"}","${symbol || "ETK"}"){         
    }
  ${getuser}${setuser}${supportsinterface}
  }
  `;

  return (
    <div className="container">
      <div className="checkbox">
      <h1>ERC4907</h1>
        <label> Name: </label>
          <input type ="text" value={name} onChange={handleNameChange} />
          <br />
        <label> Symbol: </label>
          <input type ="text" value={symbol} onChange={handleSymbolChange} />
          <br />
        <label>
          Set User
          <input type="checkbox" checked={functions.set} onChange={() => setFun()} />
        </label>
        <label>
          Get User
          <input type="checkbox" checked={functions.get} onChange={() => getFun()} />
        </label>
        <label>
           Supports Interface
          <input type="checkbox" checked={functions.supports} onChange={() => supportsFun()} />
        </label>
      </div>
      <pre className="code">
        <code>{defaultSolidityCode}</code>
      </pre>
    </div>
  );
};

export default App1;