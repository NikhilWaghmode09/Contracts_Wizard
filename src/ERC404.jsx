import React, { useState } from 'react';
import './App.css';

const App1 = () => {
  const [mintableimport, setmintableimport] = useState('');
  const [mintableinherit, setmintableinherit] = useState('');
  const [mintableparameter, setmintableparameter] = useState('');
  const [mintableconstructor, setmintableconstructor] = useState('');
  const [mintablefunction, setmintablefunction] = useState('');

  const [transferfunction, settransferfunction] = useState('');

  const [merkleimport, setmerkleimport] = useState('');
  const [merkleinherit, setmerkleinherit] = useState('');
  const [merklefunction, setmerklefunction] = useState('');

  const [exemptimport, setexemptimport] = useState('');
  const [exemptinherit, setexemptinherit] = useState('');
  const [exemptparameter, setexemptparameter] = useState('');
  const [exemptconstructor, setexemptconstructor] = useState('');
  const [exemptconstructordata,setexemptconstructordata] = useState('');
  const [exemptfunction, setexemptfunction] = useState('');

  const [name, setname] = useState('');
  const [symbol, setsymbol] = useState('');
  const [decimal, setdecimal] = useState('');
  useState(() => [name, symbol, decimal]);

  const handleNameChange = (event) => {
    setname(event.target.value);
  };
  const handleSymbolChange = (event) => {
    setsymbol(event.target.value);
  };
  const handlesDecimalChange = (event) => {
    setdecimal(event.target.value);
  };

  const [functions, setFunctions] = useState({
    mint: false,
    merkle: false,
    exempt: false,
    transfer: false
  });

  const mintableFun = () => {                 //MintableFunctions
    if (!functions.mint) {
      setmintableimport(`
  import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";`);
      setmintableinherit(", Ownable");
      setmintableparameter(`,
      address initialOwner_`);
      setmintableconstructor(`
      Ownable(initialOwner_)`);
      setmintablefunction(`
    function mintERC20 (address to, uint256 value) public onlyOwner { 
        _mintERC20(to, value);
    }
    `);
    } else {
      setmintableimport('');
      setmintableinherit('');
      setmintableparameter('');
      setmintableconstructor('');
      setmintablefunction('');
    }
    setFunctions(prevState => ({ ...prevState, mint: !functions.mint }));
  };


  const transferFun = () => {                 
      if (!functions.transfer) {
      settransferfunction(`
    function safetransferFrom(address from_, address to_, uint256 id_) public override { 
        safeTransferFrom(from_, to_, id_, "");
    }
    `);
    } else {
      settransferfunction('');
    }
    setFunctions(prevState => ({ ...prevState, transfer: !functions.transfer}));
  };
  

  const merkleFun = () => {                 
    if (!functions.merkle) {
      setmerkleimport(`
  import {ERC404MerkleClaim} from "./extensions/ERC404MerkleClaim.sol";`);
      setmerkleinherit(", ERC404MerkleClaim");
      setmerklefunction(`
    function myFunction(bytes32[] memory proof, address claimer, uint256 value) external view {
        // Check if the claimer is eligible for the airdrop
        bool isEligible = verifyProof(proof, claimer, value);
        
        // Perform some action based on the eligibility
        if (isEligible) {
            // Do something if the claimer is eligible
        } else {
            // Do something if the claimer is not eligible
        }
    }
    `);
    } else {
      setmerkleimport('');
      setmerkleinherit('');
      setmerklefunction('');
    }
    setFunctions(prevState => ({ ...prevState, merkle: !functions.merkle }));
  };

  const exemptFun = () => {                 
    if (!functions.query) {
      setexemptimport(`
  import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";`);
      setexemptinherit(", Ownable");
      setexemptparameter(`,
      uint256 maxTotalSupplyERC721_,
      address initialOwner_,
      address initialMintRecipient_`);
      setexemptconstructor(`
      Ownable(initialOwner_)`)
      setexemptconstructordata(`
      _setERC721TransferExempt(initialMintRecipient_, true);
      _mintERC20(initialMintRecipient_, maxTotalSupplyERC721_ * units);`)
      setexemptfunction(`
    function setERC721TransferExempt( 
        address account_,
        bool value_
        ) external onlyOwner {
          _setERC721TransferExempt(account_, value_);
        }
    }
    `);

    } else {
      setexemptimport('');
      setexemptinherit('');
      setexemptparameter('');
      setexemptconstructor('');
      setexemptconstructordata('');
      setexemptfunction('');
    }
    setFunctions(prevState => ({ ...prevState, exempt: !functions.exempt }));
  };

//Default Smart Contract Code.
  const defaultSolidityCode = `//SPDX-License-Identifier: MIT
  pragma solidity ^0.8.0;
  
  import {ERC404} from "./ERC404.sol";${mintableimport}${merkleimport}${exemptimport}
  import {Strings} from "@openzeppelin/contracts/utils/Strings.sol"; 
  
  contract ${name || "ExampleToken"} is ERC404${mintableinherit}${merkleinherit}${exemptinherit} {
    constructor(
     ${mintableparameter}${exemptparameter}
    ) ERC404("${name || "ExampleToken"}", "${symbol || "ETK"}", ${decimal || "0"}) ${mintableconstructor}${exemptconstructor} {${exemptconstructordata}
    }

    function tokenURI(uint256 id_) public pure override returns (string memory) {
      return string.concat("https://example.com/token/", Strings.toString(id_));
    }
    ${mintablefunction}${transferfunction}${merklefunction}${exemptfunction}
  }
  `;

  return (
    <div className="container">
      <div className="checkbox">
      <h1>ERC404</h1>
        <label> Name: </label>
          <input type ="text" value={name} onChange={handleNameChange} />
          <br />
        <label> Symbol: </label>
          <input type ="text" value={symbol} onChange={handleSymbolChange} />
          <br />
        <label> Decimal: </label>
          <input type ="number" value={decimal} onChange={handlesDecimalChange} />
          <br />
        <label>
          Mintable
          <input type="checkbox" checked={functions.mint} onChange={() => mintableFun()} />
        </label>
        <label>
          Transfer
          <input type="checkbox" checked={functions.transfer} onChange={() => transferFun()} />
        </label>
        <label>
          Merkle
          <input type="checkbox" checked={functions.merkle} onChange={() => merkleFun()} />
        </label>
        <label>
          Transfer Exempt
          <input type="checkbox" checked={functions.exempt} onChange={() => exemptFun()} />
        </label>
      </div>
      <pre className="code">
        <code>{defaultSolidityCode}</code>
      </pre>
    </div>
  );
};

export default App1;