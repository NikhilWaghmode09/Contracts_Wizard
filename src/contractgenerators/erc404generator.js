const getErc404String = ({ name, symbol, decimal, mintable, transfer, merkle, transferExempt }) => {
  let mintableimport = mintable ? `\nimport '@openzeppelin/contracts/access/Ownable.sol';` : '';
  let mintableinherit = mintable ? `, Ownable` : '';
  let mintableparameter = mintable ? `address initialOwner_` : '';
  let mintableconstructor = mintable ? `Ownable(initialOwner_)` : '';
  let mintablefunction = mintable ? `
  function mintERC20 (address to, uint256 value) public onlyOwner { 
    _mintERC20(to, value);
  }` : '';

  let transferfunction = transfer ? `
  function safetransferFrom(address from_, address to_, uint256 id_) public override { 
    safeTransferFrom(from_, to_, id_, "");
  }` : '';

  let merkleimport = merkle ? `\nimport {ERC404MerkleClaim} from "./extensions/ERC404MerkleClaim.sol";` : '';
  let merkleinherit = merkle ? `, ERC404MerkleClaim` : '';
  let merklefunction = merkle ? `
  function myFunction(bytes32[] memory proof, address claimer, uint256 value) external view {
    // Check if the claimer is eligible for the airdrop
    bool isEligible = verifyProof(proof, claimer, value);
    
    // Perform some action based on the eligibility
    if (isEligible) {
      // Do something if the claimer is eligible
    } else {
      // Do something if the claimer is not eligible
    }
    }`: '';

    let exemptimport = transferExempt ? `\nimport {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";`: '';
    let exemptinherit = transferExempt ? `, Ownable`:'';
    let exemptparameter = transferExempt ? `,
    uint256 maxTotalSupplyERC721_,
    address initialOwner_,
    address initialMintRecipient_`:'';
    let exemptconstructor = transferExempt ? `Ownable(initialOwner_)`:'';
    let exemptconstructordata = transferExempt ? `
    _setERC721TransferExempt(initialMintRecipient_, true);
    _mintERC20(initialMintRecipient_, maxTotalSupplyERC721_ * units);`:'';
    let exemptfunction = transferExempt ? `
    function setERC721TransferExempt( 
      address account_,
      bool value_
    ) external onlyOwner {
      _setERC721TransferExempt(account_, value_);
    }`:'';

  return `//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
  
import {ERC404} from "./ERC404.sol";${mintableimport}${merkleimport}${exemptimport}
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol"; 
  
contract ${name} is ERC404${mintableinherit}${merkleinherit}${exemptinherit} {
  constructor(${mintableparameter}${exemptparameter}) ERC404("${name}", "${symbol}", ${decimal}) ${mintableconstructor}${exemptconstructor} {${exemptconstructordata}
  }

  function tokenURI(uint256 id_) public pure override returns (string memory) {
    return string.concat("https://example.com/token/", Strings.toString(id_));
  }
  ${mintablefunction}${transferfunction}${merklefunction}${exemptfunction}
}`;

}

const erc404generator = ({ name, symbol, decimal, mintable, transfer, merkle, transferexempt }) => {
  return getErc404String(
    {
      name: name || 'ExampleToken',
      symbol: symbol || 'ETK',
      decimal: decimal || '0',
      mintable: mintable || false,
      transfer: transfer || false,
      merkle: merkle || false,
      transferExempt: transferexempt || false
    }
  )
}

export default erc404generator