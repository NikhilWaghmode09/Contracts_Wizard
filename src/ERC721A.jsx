import React, { useState } from 'react';
import './App.css';

const App1 = () => {
  const [mintableimport, setmintableimport] = useState('');
  const [burnableimport, setburnableimport] = useState('');
  const [queryableimport, setqueryableimport] = useState('');
  const [burnableinherit, setburnableinherit] = useState('');
  const [mintableinherit, setmintableinherit] = useState('');
  const [queryableinherit, setqueryableinherit] = useState('');
  const [mintableparameter, setmintableparameter] = useState('');
  const [mintableconstructor, setmintableconstructor] = useState('');
  const [mintablefunction, setmintablefunction] = useState('');

  const [functions, setFunctions] = useState({
    mint: false,
    burn: false,
    query: false
  });

  const mintableFun = () => {                 //MintableFunctions
    if (!functions.mint) {
      setmintableimport(`
  import '@openzeppelin/contracts/access/Ownable.sol';`);
      setmintableinherit(", Ownable");
      setmintableparameter("address initialOwner");
      setmintableconstructor(`
      Ownable(initialOwner)`);
      setmintablefunction(`function safeMint(address to, uint256 quantity) public onlyOwner { 
        _safeMint(to, quantity, '');
      }`);
    } else {
      setmintableimport('');
      setmintableinherit('');
      setmintableparameter('');
      setmintableconstructor('');
      setmintablefunction('');
    }
    setFunctions(prevState => ({ ...prevState, mint: !functions.mint }));
  };

  const burnableFun = () => {                 //BurnableFunctions
    if (!functions.burn) {
      setburnableimport(`
  import 'erc721a/contracts/extensions/ERC721ABurnable.sol';`);
      setburnableinherit(", ERC721ABurnable");
    } else {
      setburnableimport('');
      setburnableinherit('');
    }
    setFunctions(prevState => ({ ...prevState, burn: !functions.burn }));
  };

  const queryableFun = () => {                 //QueryableFunctions
    if (!functions.query) {
      setqueryableimport(`
  import 'erc721a/contracts/extensions/ERC721AQueryable.sol';`);
      setqueryableinherit(", ERC721AQueryable");
    } else {
      setqueryableimport('');
      setqueryableinherit('');
    }
    setFunctions(prevState => ({ ...prevState, query: !functions.query }));
  };

//Default Smart Contract Code.
  const defaultSolidityCode = `// SPDX-License-Identifier: MIT                 
  pragma solidity ^0.8.20;
  
  import 'erc721a/contracts/ERC721A.sol';${mintableimport}${burnableimport}${queryableimport}

  contract MyToken is ERC721A ${mintableinherit} ${burnableinherit} ${queryableinherit} {
    constructor(${mintableparameter}) ERC721A('MyToken', 'MTK') ${mintableconstructor} 
    {}

    ${mintablefunction}
  }
  `;

  return (
    <div className="container">
      <div className="checkbox">
        <label>
          Mintable
          <input type="checkbox" checked={functions.mint} onChange={() => mintableFun()} />
        </label>
        <label>
          Burnable
          <input type="checkbox" checked={functions.burn} onChange={() => burnableFun()} />
        </label>
        <label>
          Queryable
          <input type="checkbox" checked={functions.query} onChange={() => queryableFun()} />
        </label>
      </div>
      <pre className="code">
        <code>{defaultSolidityCode}</code>
      </pre>
    </div>
  );
};

export default App1;
